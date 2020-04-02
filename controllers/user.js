const User = require('./../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {errorHandler} = require('./../helper/dbErrorHandler')

exports.signUp = async (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json({user})
    })
}

exports.signIn = async (req, res) => {
    const {email, password} = req.body
    User.findOne({email}, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User with that email does not exists. please signUp"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            })
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
        res.cookie('t', token, {expire: new Date() + 10000})
        const {_id, name, email, role} = user
        return res.json({token, user: {_id, name, email, role}})
    })
}
exports.signOut = async(req,res)=>{
    res.clearCookie('t')
    res.json({message:"SignOut successful"})
}