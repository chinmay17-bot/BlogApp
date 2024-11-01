const mongoose = require("mongoose")


//route handler
const commentSchema =  new mongoose.Schema(
    {
        post:{
            //when we are reffering to another model here we are reffering postModel
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        },

        body:{
            type:String,
            required:true
        },  

        user:{
            type:String,
            required:true
        }

    
    }
)



module.exports = mongoose.model("Comment" , commentSchema);