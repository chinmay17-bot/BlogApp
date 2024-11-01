const express = require("express")

const router = express.Router()

//import controller
const {createComment} = require("../controllers/commentController")



//map controller
router.post("/comments/create" , createComment)


//export
module.exports = createComment
