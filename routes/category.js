const express = require('express')
const router = express.Router()

const {create} = require('../controllers/category.js')
const {userSignUpValidator} = require('./../validator')
const {requireSignIn,isAuth,isAdmin} = require('../controllers/auth.js')
const {userById} = require('./../controllers/user')
router.post('/category/create/:userId', requireSignIn,isAuth,isAdmin,create)
router.param('userId', userById)


module.exports = router