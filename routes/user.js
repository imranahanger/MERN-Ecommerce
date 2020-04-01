const express = require('express')
const router = express.Router()

const {signUp} = require('./../controllers/user.js')
const {userSignUpValidator} = require('./../validator')
router.post('/signUp',userSignUpValidator, signUp)

module.exports = router