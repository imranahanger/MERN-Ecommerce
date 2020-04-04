const Category = require('./../models/categrory')
const {errorHandler} = require('./../helper/dbErrorHandler')

exports.create = async (req, res) => {
    const category = new Category(req.body)
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({category})
    })

}

