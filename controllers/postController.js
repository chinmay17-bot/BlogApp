const Post = require('../models/postModel')

exports.createPost = async (req , res) => {
    try {
        const {title , body} = req.body;
        console.log(title , body)
    } catch (error) {
        console.log("error")
    }
}