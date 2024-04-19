const asyncHandler = require('../utils/asyncHandler')
const Recruiter = require('../models/recruiterModel');
const apiError = require('../utils/apiError');

const signupRecuiter = async (req, res, next) => {
    try {
        const { name, email, phoneNumber ,companyName, companyEmail, companyWebsite , password } = req.body;
        
        // Check if any required field is missing
        if (!name || !email || !phoneNumber || !companyName || !companyEmail || !companyWebsite || !password ) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }      
     
        // check if the recruter existed or not 
        const existedRecruiter = await Recruiter.findOne( { email } )

        if ( existedRecruiter ) {
            res.status(422).json({ message: "user already exist " });
            const error = new apiError(
              "User already exists, please login instead.",
              422
            );
            return next(error);
          }


        const createRecruiter = new Recruiter({
            name,
            email,
            phoneNumber,
            companyName,
            companyEmail,
            companyWebsite,
            password
        });
        try {
            await createRecruiter.save();
            
        } catch (err) {
            const error = new apiError(
                "Signing up failed, please try again later.",
                500
              );
              return next(error);
        }
          
          res.status(200).json({ message: "Registration successful" });
     
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const loginRecuiter = async (req, res, next  ) => {
    try {
       const {  email, password } = req.body;
         console.log(req.body);  
         if ( !email || !password ) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }   
        
        const existingRecuiter =  await Recruiter.findOne( { email } )
        if (!existingRecuiter || existingRecuiter.password !== password) {
            const error = new apiError(
                "Invalid credentials, could not log you in.",
                401
            );
            return next(error);
        }
        res.status(200).json({ message: "login successful" });
    } catch (error) {

        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });    
    }
}

const profileRecuiter = async (req, res, next ) => {
    try {
        const { id } = req.params;
        const recruiter = await Recruiter.findById(id);
        res.status(200).json(recruiter)
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = { signupRecuiter , loginRecuiter, profileRecuiter}; 