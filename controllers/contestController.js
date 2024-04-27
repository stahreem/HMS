const Contest = require('../models/contestsModel')

const createContest = async (req, res, next) => {
    try {
        const {contestID, contestName, description, skillsRequired, domain, duration, startDate,  endDate } = req.body;

        // Create a new contest
        const contest = new Contest({
            contestID, contestName, description, skillsRequired, domain, duration, startDate,  endDate
            
        });

        // Save the contest
        await contest.save();

        res.status(201).json({ message: "Contest created successfully", contest });
    } catch (error) {
        console.error("Error creating contest:", error);
        res.status(500).json({ message: "Failed to create contest" });
    }
};


module.exports = createContest;