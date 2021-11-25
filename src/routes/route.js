const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const loginController = require('../controllers/loginController')
const Middleware = require('../middlewares/Middleware')

router.post('/createUser',  userController.createUser);
router.post('/validate', loginController.validate);
router.get('/users/:userId', Middleware.tokenchecker, userController.getDetails);
router.put('/update/:userId',Middleware.tokenchecker,userController.update)

module.exports = router;