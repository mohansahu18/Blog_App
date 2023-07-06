// imports routes
const express = require('express')
const routes = express.Router()

// import controller
const { createComment } = require("../controllers/commentControllers")
const { createPost, getAllPost } = require("../controllers/postControllers")
// mapping
routes.post('/comments/create', createComment)
routes.post('/posts/create', createPost)
routes.get('/Posts', getAllPost)

// export
module.exports = routes