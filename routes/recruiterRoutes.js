const express = require('express')
const router = express.Router();
const recruiterController = require('../controllers/recruiterController')


router.post('/signup', recruiterController.signupRecuiter)




module.exports = router