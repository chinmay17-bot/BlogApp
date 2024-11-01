const mongoose = require("mongoose")


//route handler
const likeSchema =  new mongoose.Schema(
    {
        post:{
            //when we are reffering to another model here we are reffering postModel
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        },

        user:{
            type:String,
            required:true
        },


    }
)



module.exports = mongoose.model("Like" , likeSchema);