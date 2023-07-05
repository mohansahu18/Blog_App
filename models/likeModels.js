// import mongoose
const mongoose = require('mongoose')

// routes handellers
const likesSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: String,
        require: true
    }
})

// export
module.exports = mongoose.model("like", likesSchema)