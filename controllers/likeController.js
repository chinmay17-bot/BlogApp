const Post = require("../models/postModel")
const Like = require("../models/likeModel")

exports.likePost = async (req , res) =>{
    try {
        const {post , user} = req.body

        const like = new Like(
            {
                post ,
                user
            }
        )

        const savedLike = await like.save();

        //update the post likes array same as in comments
        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike._id}} , {new : true})

        .populate("likes")
        .exec()

        res.json(
            {
                post : updatedPost
            }
        )



    } catch (error) {
        console.error(error);
    }
}

exports.unlikePost = async (req , res) =>{
    try {
        const {post , like} = req.body


        //we will delete if postad and like id both matches
        //findOneAndDelete will delete first match
        const deleteLike = await Like.findOneAndDelete({post:post , _id:like})

        //update the post likes array same as in comments
        //below functions will first find the post and delete from the likes array with matching like 
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes : deleteLike._id}} , {new : true})

        .populate("likes")
        .exec()

        res.json(
            {
                post : updatedPost
            }
        )



    } catch (error) {
        console.error(error);
    }
}