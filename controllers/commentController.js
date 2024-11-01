const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//logic
exports.createComment = async (req , res) => {
    try {

        //alter way to create post
        const{post , user , body} = req.body;

        //create a comment object
        const comment = new Comment({
            post,user,body
        })


        //save the new comment
        const savedComment = await comment.save();


        //This is very important
        //find  post by id  , add new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {comments : savedComment._id}} , {new : true})

        .populate("comments")
        .exec()


        //$push to update and $pull to delete
        //new true returns the updated document after updation

        //IMP
        //populate will fetch data of comment id andinsert in the comment array 
        //exec to execute
        //other wise only ids will be stored

        res.json(
            {
                post : updatedPost
            }
        )

    } catch (error) {
        console.error(error);
    }
}

