// imports routes
const express = require('express')
const routes = express.Router()

// import controller
const { createComment } = require("../controllers/commentControllers")

// mapping
routes.post('/comments/create', createComment)

// export
module.exports = routes