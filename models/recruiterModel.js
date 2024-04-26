const mongoose = require('mongoose')

const recruiterSchema = new mongoose.Schema(
    {
        image:{
            type:String,
            // required: true,
        },
        firstName:{
            type:String,
            required: true,
        },
        lastName:{
            type:String,
            required: true,
        },
        userName: {
            type:String,
            // required: true,
            // unique: true,
        },
        email: {
            type: String,
            required: true,
            // unique: true,
            lowercase: true
        },
        dataOfBirth:{
                type: Date,
                // required: true,
        },
        gender:{
            type:String,
            required: true,
        },
        
            city:{
                type:String,
            // required: true,
            },
            state:{
                type:String,
            // required: true,
            },
            country:{
                type:String,
            required: true,
            },
        password:{
            type:String,
            required: true,
        },
        phoneNumber: {
            type:Number,
            required: true,
        },
        employID:{
            type:String,
            // required: true,
        },  
        // company details 
        companyName: {
            type:String,
            required: true,
            // unique: true,
        },
        companySize: { 
            type:String,
            // required: true,
        },
        industry: { 
            type:String,
            // required: true,
        },
        specialization: { 
            type:String,
            // required: true,
        },
        companyWebsite: { //not nessary 
            type:String,
            // required: true,
        },
        companyEmail: {
            type:String,
            // required: true,
            // unique: true,
            lowercase: true
        },
        description:{
            type:String,
            // required: true,
        },
        contestCreated:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contest",
        }
    ],

    // refreshToken: {
    //     type: String
    // }
    }, {timestamps: true}
)
   
const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter; 