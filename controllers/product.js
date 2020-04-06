const Product = require('./../models/product')
const formDable = require('formidable')
const _ = require('lodash')
const fs = require('fs')
const {errorHandler} = require('./../helper/dbErrorHandler')

exports.create = async (req, res) => {
    let form = new formDable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        const {
            name,
            description,
            price,
            category,
            shipping
        } = fields
        if( !name||
            !description||
            !price||
            !category||
            !shipping){
            return res.status(400).json({
                error: 'All fields are Required'
            })
        }
        const product = new Product(fields)
        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image size should be less than 1mb'
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contectType = files.photo.type
        }
        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json({result})
        })
    })


}
exports.productById = async(req,res,next,id)=>{
    Product.findById(id).exec((err,product)=>{
        if(err||!product){
            return res.status(400).json({
                error:"Product not found"
            })
        }
        req.product = product
        next()
    })
}
exports.read = async(req,res)=>{
    req.product.photo = undefined
    return res.json(req.product)
}
exports.remove = async (req,res)=>{
    let product = req.product
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })

        }
        res.json({
            deletedProduct,
            "message":"Product deleted successfully"
        })
    })
}
exports.update = async(req,res)=>{
    let form = new formDable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        const {
            name,
            description,
            price,
            category,
            shipping
        } = fields
        if( !name||
            !description||
            !price||
            !category||
            !shipping){
            return res.status(400).json({
                error: 'All fields are Required'
            })
        }
        let product = req.product
        console.log("product",product)
        console.log("fields",fields)
        product = _.extend(product,fields)
        console.log("product",product)

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image size should be less than 1mb'
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contectType = files.photo.type
        }
        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json({result})
        })
    })

}

