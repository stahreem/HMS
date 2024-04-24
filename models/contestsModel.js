const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema(
  {
    contestID: {
      type: String,
      required: true,
      unique: true,
    },
    contestName: {  //title 
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    }, 
    duration: { //timings 
      type: String,
      required: true,
    },
    participants: { //array 
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    points: {
      type: String
    },
    status: {
      type: String,
      required: true,
      enum: ["end", "live", "upcomming"],
    },
    timeTaken: {
      type: String,
      required: true,
    },
    totalParticipants: {
      type: Number,
      required: true,
    },
    contestQuery: { //object
      type: String,
      required: true,
    },
    recruiterName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recruiter",
    },
    companyName: {
      type: String,
      required: true,
    },
    jobAvailable: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Contest = mongoose.model("Contest", contestSchema)

module.exports = Contest