// import mongoose
const mongoose = require("mongoose")

// route handlers
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post" //reference to post model
    },
    user: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
})

// export
module.exports = module.modele("comment", commentSchema)