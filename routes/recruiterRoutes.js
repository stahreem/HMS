const express = require('express')
const router = express.Router();
const recruiterController = require('../controllers/recruiterController')

router.get('/getallRecruiter',recruiterController.getAllRecuiter )
router.post('/signup', recruiterController.signupRecuiter);
router.post('/login', recruiterController.loginRecuiter);
router.get('/profile/:id', recruiterController.profileRecuiter);
router.put('/profile/:id', recruiterController.updateRecuiter);





module.exports = router