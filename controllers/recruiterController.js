const asyncHandler = require('../utils/asyncHandler')
const Recruiter = require('../models/recruiterModel');
const apiError = require('../utils/apiError');
const { validationResult } = require("express-validator");
const multer = require('multer')
const multerConfig = require('../utils/multer')

// get all recuiter controller

const getAllRecuiter = async (req, res, next) => {
    try {
        const allRecruiters = await Recruiter.find();
        res.status(200).json(allRecruiters);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Something went wrong while fetching recruiters." });
    }
};

// signup recuiter controller

const signupRecuiter = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new apiError(
                "Invalid inputs passed, please check your data.",
                422
            );
            return next(error);
        }

        const { firstName, lastName, gender, companyName, country, phoneNumber, email, password } = req.body;
        console.log(req.body);
        // Check if any required field is missing
        if (!firstName || !lastName || !gender || !companyName || !country || !phoneNumber || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        // Check if the recruiter already exists
        const existedRecruiter = await Recruiter.findOne({ email });
        if (existedRecruiter) {
            // Highlighted change: Error message for duplicate email
            const error = new apiError(
                "User already exists with this email address, please login instead.",
                422
            );
            return next(error);
        }

        // Create a new recruiter
        const newRecruiter = new Recruiter({
            firstName,
            lastName,
            gender,
            companyName,
            country,
            phoneNumber,
            email,
            password
        });

        // Save the new recruiter
        await newRecruiter.save();
        res.status(200).json({ message: "Registration successful" });
        
    } catch (error) {
        console.error("Error:", error);
        const errorMessage = "Signing up failed, please try again later.";
        const status = error instanceof apiError ? error.status || 500 : 500;
        res.status(status).json({ message: errorMessage });
    }
};

// login recuiter controller

const loginRecuiter = async (req, res, next  ) => {
    try {
       const {  email, password } = req.body;
         if ( !email || !password ) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }   
        
        const existingRecuiter =  await Recruiter.findOne( { email } )
        if (!existingRecuiter || existingRecuiter.password !== password) {
            const error = new apiError(
                "Invalid credentials, could not log you in.",
                401
            );
            res.send({message:  "Invalid credentials, could not log you in." })
            return next(error);
        }
        res.status(200).json({ message: "login successful" });
    } catch (error) {

        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });    
    }
}

// dashbord of recuiter controller

const profileRecuiter = async (req, res, next ) => {
    try {
        const { id } = req.params;
        const recruiter = await Recruiter.findById(id);
        res.status(200).json(recruiter)
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
        const error = new apiError(
            "cannot find user ",
            500
          );
          return next(error);
        
    }
}

// update recuiter controller

const updateRecuiter = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new apiError(
                "Invalid inputs passed, please check your data.",
                422
            );
            return next(error);
        }

        multerConfig.single('image')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                // Multer error handling
                return res.status(400).json({ message: 'File upload error' });
            } else if (err) {
                // Other errors
                return res.status(500).json({ message: 'Internal server error' });
            }

            // Get the uploaded image data from req.file
            const imageData = req.file;
            let base64Image = null;

            // Check if an image was uploaded
            if (imageData) {
                // Encode the image data to base64
                base64Image = imageData.buffer.toString('base64');
            }

            const { id } = req.params;

            // Extract other properties from the request body
            const {
                firstName,
                lastName,
                userName,
                dataOfBirth,
                gender,
                companyName,
                country,
                city,
                state,
                phoneNumber,
                employID,
                email,
                password,
                companySize,
                companyEmail,
                industry,
                specialization,
                companyWebsite,
                description,
                contestCreated
            } = req.body;

            // Update the recruiter
            const updatedRecruiter = await Recruiter.findByIdAndUpdate(id, {
                $set: {
                    image: base64Image,
                    firstName,
                    lastName,
                    userName,
                    dataOfBirth,
                    gender,
                    companyName,
                    country,
                    city,
                    state,
                    phoneNumber,
                    employID,
                    email,
                    password,
                    companySize,
                    companyEmail,
                    industry,
                    specialization,
                    companyWebsite,
                    description,
                    contestCreated
                }
            });

            if (!updatedRecruiter) {
                return next(new apiError(404, "User not found."));
            }

            // Check if an image was uploaded
            // if (!imageData) {
            //     return res.status(400).json({ message: 'No image uploaded' });
            // }

            res.status(200).json({ message: "Update successful" });
        });

    } catch (err) {
        console.error("Error updating user:", err);
        next(new apiError(500, "Something went wrong, could not update user."));
    }
};

module.exports = { getAllRecuiter, signupRecuiter, loginRecuiter, profileRecuiter, updateRecuiter }; 