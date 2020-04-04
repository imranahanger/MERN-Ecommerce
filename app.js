const express = require('express')
require("dotenv").config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
const expressValidator = require('express-validator')
//app
const app = express()
//db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database connected")
})
mongoose.set('debug', true);

//routes

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use('/api', authRoute)
app.use('/api', userRoute)
app.use('/api', categoryRoute)
app.use('/api', productRoute)


const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})