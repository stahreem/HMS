const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema(
    {
    contestId: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Contest', 
        required: true 
    },
    participants: [
        { type: mongoose.Schema.Types.ObjectId, 
            ref: 'Participant' 
        }
    ],
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard
