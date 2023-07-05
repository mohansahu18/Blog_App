// import the express
const express = require("express")

// import the port from .env file
require("dotenv").config()
const PORT = process.env.PORT || 3000

//create a new instance of Express application
const app = express()

//middleware for parsing json request body
app.use(express.json())

// imports the routes
const blog = require('./routes/blogs')

// mount the routes
app.use("/api/v1", blog)

// starting  the server
app.listen(PORT, () => {
    console.log(`server started on port no. ${PORT}`);
})

// connecting to database
const dbconnection = require("./config/database")
dbconnection()

// default routes
app.get('/', (req, res) => {
    res.send('Welcome To Our API')
})

