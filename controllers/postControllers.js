// import
const Post = require('../models/postModels')

// logic
const createPost = async (req, res) => {
    try {
        const { title, body } = req.body
        const post = new Post({
            title, body
        })
        const savePost = await post.save()

        return res.status(200).json({
            success: true,
            data: savePost,
            message: "post created successfully"
        })
    } catch (err) {
        console.log(err)
        console.error(err)
        return res.status(500).json({
            success: false,
            data: "unable to create post",
            msg: err.message
        })
    }
}

const getAllPost = async (req, res) => {
    try {
        const response = await Post.find().populate("likes").populate("comments").exec()
        return res.status(200).json({
            success: true,
            data: response,
            message: "post fetched successfully"
        })

    } catch (err) {
        console.log(err)
        console.error(err)
        return res.status(500).json({
            success: false,
            data: "unable to fetched post",
            msg: err.message
        })
    }
}

// export
module.exports = { createPost, getAllPost }