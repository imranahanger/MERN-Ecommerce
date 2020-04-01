const express = require('express')
require("dotenv").config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/user')
const expressValidator = require('express-validator')
//app
const app = express()
//db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Database connected")
})
//routes

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use('/api',userRoute)


const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})