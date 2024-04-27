const Leaderboard = require('../models/leaderboardModel')

const getLeaderboard = async (req, res, next) => {
    try {
        const { contestId } = req.params;

        // Fetch leaderboard for the specified contest
        const leaderboard = await Leaderboard.findOne({ contest: contestId }).populate('participants');

        if (!leaderboard) {
            return res.status(404).json({ message: "Leaderboard not found" });
        }

        res.status(200).json({ leaderboard });
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ message: "Failed to fetch leaderboard" });
    }
};

module.exports  = { getLeaderboard }