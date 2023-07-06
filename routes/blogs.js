// imports routes
const express = require('express')
const routes = express.Router()

// import controller
const { createComment } = require("../controllers/commentControllers")
const { createPost, getAllPost } = require("../controllers/postControllers")
const { likePost, unlikePost } = require("../controllers/likeControllers")
// mapping
routes.post('/comments/create', createComment)
routes.post('/posts/create', createPost)
routes.get('/Posts', getAllPost)
routes.post('/likes/like', likePost)
routes.delete('/likes/unlike', unlikePost)



// export
module.exports = routes