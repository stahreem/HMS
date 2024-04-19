const mongoose = require('mongoose')

const recruiterSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        phoneNumber: {
            type:Number,
            required: true,
        },
        companyName: {
            type:String,
            required: true,
            unique: true,
        },
        companyEmail: {
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        companyWebsite: {
            type:String,
            required: true,
        },

        password:{
            type:String,
            required: true,
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