const express = require('express')
const router = express.Router()

const {signUp,signIn,signOut} = require('./../controllers/user.js')
const {userSignUpValidator} = require('./../validator')

router.post('/signUp',userSignUpValidator, signUp)
router.post('/signIn', signIn)
router.post('/signOut', signOut)

module.exports = router