const Participant = require('../models/participantModel')

const registerParticipant = async (req, res, next) => {
    try {
        const { userId, contestId } = req.body;
        
        // Check if the participant already exists
        const existingParticipant = await Participant.findOne({ user: userId, contest: contestId });
        if (existingParticipant) {
            return res.status(400).json({ message: "Participant already registered for this contest" });
        }

        // Create a new participant
        const participant = new Participant({
            user: userId,
            contest: contestId,
            // Add other participant details as needed
        });

        // Save the participant
        await participant.save();

        res.status(201).json({ message: "Participant registered successfully" });
    } catch (error) {
        console.error("Error registering participant:", error);
        res.status(500).json({ message: "Failed to register participant" });
    }
};
