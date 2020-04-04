const Category = require('./../models/categrory')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {errorHandler} = require('./../helper/dbErrorHandler')

exports.create = async (req, res) => {
    const category = new Category(req.body)
    category.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }
        res.json({category})
    })

}

