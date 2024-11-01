const mongoose = require("mongoose")


//route handler
const postSchema =  new mongoose.Schema(
    {
        title:{
            //when we are reffering to another model here we are reffering postModel
            type:String,
            required:true,
        },

        likes:[{
            //when we are reffering to another model here we are reffering postModel
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }],

        body:{
            type:String,
            required:true
        },
        comments:[{
            //when we are reffering to another model here we are reffering postModel
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }],


    }
)



module.exports = mongoose.model("Post" , postSchema);