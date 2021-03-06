const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const { authentication, isAdmin } = require('../middelware/authentication')
const { uploadUserAvatar } = require('../middelware/imgsource');


router.post('/',uploadUserAvatar.single('upload'), UserController.create)
router.post('/login', UserController.login)

router.get('/myInfo', authentication, UserController.getInfo)
router.put('/', authentication, UserController.update)
router.delete('/id/:id', authentication, isAdmin, UserController.delete)
router.get('/', authentication, isAdmin, UserController.findAll)
router.delete('/logout', authentication, UserController.logout)
router.get('/currentTokens', authentication, isAdmin, UserController.currentTokens)
    // router.get('/confirm/:token', UserController.validateUser)

module.exports = router;