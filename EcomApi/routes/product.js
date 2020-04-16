const express = require('express')
const router = express.Router()

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listBySearch,
    photo,
    listCategories
} = require('../controllers/product')
const {userSignUpValidator} = require('./../validator')
const {requireSignIn, isAuth, isAdmin} = require('../controllers/auth.js')
const {userById} = require('./../controllers/user')
router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignIn, isAuth, isAdmin, create)
router.delete('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, update)

router.get('/products', list)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories/:productId', listCategories)
router.post("/products/by/search", listBySearch);
router.get("/products/photo/:productId", photo);

router.param('userId', userById)
router.param('productId', productById)


module.exports = router