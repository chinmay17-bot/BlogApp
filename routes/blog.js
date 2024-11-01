const express = require("express")

const router = express.Router()

//import controller
const {createComment} = require("../controllers/commentController")
const { createPost } = require("../controllers/postController")



//map controller
// router.post("comments/create" , createComment)
// router.post("post/create" , createPost)


//export
module.exports = createComment
