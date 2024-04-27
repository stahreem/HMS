const ProfileRecommendation = require('../models/profileRecommendationModel')

const generateProfileRecommendations = async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Fetch profile recommendations for the specified user
        const recommendations = await ProfileRecommendation.findOne({ user: userId }).populate('recommendedProfiles');

        if (!recommendations) {
            return res.status(404).json({ message: "Profile recommendations not found" });
        }

        res.status(200).json({ recommendations });
    } catch (error) {
        console.error("Error generating profile recommendations:", error);
        res.status(500).json({ message: "Failed to generate profile recommendations" });
    }
};
