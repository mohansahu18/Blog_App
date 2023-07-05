// import the model
const Comment = require("../models/commentModels")
const Post = require("../models/postModels")

// logic
const createComment = async (req, res) => {
    try {
        // fetch data from request body
        const { post, user, body } = req.body
        // create the comment object
        const comment = new Comment({
            post, user, body
        })
        // saved the comment into database
        const savedComment = await comment.save()
        // find the post by id ,add the new comments to its comments array
        const updatePost = await Post.findByIdAndUpdate(
            post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")//populate the comment array with comment documents
            .exec()
        return res.status(200).json({
            success: true,
            data: updatePost,
            message: "New comment created successfully"
        })
    }
    catch (err) {
        console.log(err);
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }

}

// export
module.exports = { createComment }