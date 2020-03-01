const express = require('express')
require("dotenv").config()
const mongoose = require('mongoose')



const userRoute = require('./routes/user')

//app
const app = express()


//db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Database connected")
})
//routes

app.use('/api',userRoute)


const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})