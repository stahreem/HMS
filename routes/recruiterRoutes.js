const express = require('express')
const router = express.Router();
const recruiterController = require('../controllers/recruiterController')


router.post('/signup', recruiterController.signupRecuiter);
router.post('/login', recruiterController.loginRecuiter);
router.get('/profile/:id', recruiterController.profileRecuiter);





module.exports = router