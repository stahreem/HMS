const mongoose = require("mongoose");

const contestsSchema = new mongoose.Schema(
  {
    contestID: {
      type: String,
      required: true,
      unique: true,
    },
    contestName: {
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
    duration: {
      type: String,
      required: true,
    },
    participants: {
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
    points: {},
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
      type: String,
      required: true,
    },
    contestQuery: {
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
