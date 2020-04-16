const express = require('express')
const router = express.Router()
const {
    signUp,
    signIn,
    signOut,
    requireSignIn,
    isAuth,
    isAdmin,
    read,
    update
} = require('../controllers/auth.js')
const {userById} = require('./../controllers/user')
router.get('/secret/:userId',requireSignIn,isAuth,isAdmin,(req,res)=>{
    res.json({
        user:req.profile
    })
})
router.get('/user/:userId',requireSignIn,isAuth,read)
router.put('/user/:userId',requireSignIn,isAuth,update)
router.param('userId', userById)

module.exports = router