const express = require('express')
require("dotenv").config()

const app = express()

const PORT = process.env.PORT

//middleware
app.use(express.json());

//routes
const blogs = require('./routes/blog')


//append route
app.use("/api/v1" , blogs)


const connectWithDb = require("./config/database")
connectWithDb()

app.listen(PORT , () => {
    console.log("Server running")
})

app.get("/" , (req,res) => {
    res.send("Running")
})