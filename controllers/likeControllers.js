// import 
const Like = require("../models/likeModels")
const Post = require('../models/postModels')

// logic
const likePost = async (req, res) => {
    try {
        const { post, user } = req.body
        const like = new Like({
            post, user
        })
        const saveLike = await like.save()
        // update post collection
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true }).populate("likes").exec()
        return res.status(200).json({
            success: true,
            data: updatePost,
            message: " successfully liked the post"
        })
    } catch (err) {
        console.log(err)
        console.error(err)
        return res.status(500).json({
            success: false,
            data: "unable to like the  post",
            msg: err.message
        })
    }
}


const unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body
        // find and delete from like collection
        const deleteLike = await Like.findByIdAndDelete({ Post: post, _id: like })

        // UPDATE THE POST COLLECTION
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } }, { new: true }).populate("likes")
        return res.status(200).json({
            success: true,
            data: updatedPost,
            message: " successfully unliked the post"
        })
    } catch (err) {
        console.log(err)
        console.error(err)
        return res.status(500).json({
            success: false,
            data: "unable to unlike the  post",
            msg: err.message
        })
    }
}

// export
module.exports = { likePost, unlikePost }