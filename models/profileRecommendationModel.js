const mongoose = require('mongoose');

const profileRecommendationSchema = new mongoose.Schema(
    {
    userId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', 
        required: true 
    },
    recommendedProfiles: [
        { 
            type: mongoose.Schema.Types.ObjectId, ref: 'User' 
        }
    ],

});

const ProfileRecommendation = mongoose.model('ProfileRecommendation', profileRecommendationSchema);

module.exports = ProfileRecommendation