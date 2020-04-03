const express = require('express')
const router = express.Router()
const {signUp,signIn,signOut,requireSignIn,isAuth,isAdmin} = require('../controllers/auth.js')
const {userById} = require('./../controllers/user')
router.get('/secret/:userId',requireSignIn,isAuth,isAdmin,(req,res)=>{
    res.json({
        user:req.profile
    })
})
router.param('userId', userById)

module.exports = router