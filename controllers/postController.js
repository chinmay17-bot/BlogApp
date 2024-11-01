const Post = require('../models/postModel')

exports.createPost = async (req , res) => {
    try {
        const {title , body} = req.body;
        // console.log(title , body)

        const post = new Post(
            {
                title , body
            }
        )

        const savedPost = await post.save();

        res.json(
            {
                post:savedPost
            }
        )
    } catch (error) {
        console.log("error")
    }
}

exports.getAllPost = async(req , res) =>{
    try {

        // this will send comments array with only its ids
        // const posts = await Post.find()

        //this will also fetch ids and values of comments
        const posts = await Post.find().populate("comments").exec();
        res.json(
            {
                posts
            }
        )
        
    } catch (error) {
        
    }
}