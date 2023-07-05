// import model
const mongoose = require("mongoose")

// routes handellers
const postSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]

})
// export
module.exports = mongoose.model("post", postSchema)
