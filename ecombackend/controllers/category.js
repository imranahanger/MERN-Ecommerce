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
exports.categoryById = async(req,res,next,id)=>{
    Category.findById(id).exec((err,category)=>{
        if(err||!category){
            return res.status(400).json({
                error:"Category not found"
            })
        }
        req.category = category
        next()
    })
}
exports.read = async(req,res)=>{
    return res.json(req.category)
}
exports.remove = async (req,res)=>{
    let category = req.category
    category.remove((err,deletedCategory)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })

        }
        res.json({
            deletedCategory,
            "message":"Category deleted successfully"
        })
    })
}
exports.update = async(req,res)=>{
    console.log("err",req.body)
    const category = req.category
    category.name = req.body.name
    category.save((err,data)=>{
        if (err||!data) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}
exports.list=async(req,res)=>{
    Category.find().exec((err,data)=>{
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

