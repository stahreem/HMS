const asyncHandler = require('../utils/asyncHandler')


const registerRecuiter = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

module.exports = registerRecuiter; 