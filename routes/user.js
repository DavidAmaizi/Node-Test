const express  = require('express');
const router = express.Router();
const Controllers = require('../controllers/user'); 
const checkAuth = require('../middleware/CheckAuth')


router.post('/',Controllers.create);
router.post('/login',Controllers.login);

router.get('/profile',checkAuth,Controllers.findOne);





module.exports = router;