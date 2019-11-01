const Joi=require('joi');
Joi.ObjectId=require('joi-objectid')(Joi);
const mongoose=require('mongoose');

const commentSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User' ,
        required:true
       },
       post:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'Post',
           required:true
       },
       comment:{
           type: String,
           minLength:3,
           maxLength:200
        }
       
})
const Comment=mongoose.model('Comment',commentSchema);

function validateComment(comment)
{
    const schema={
        user:Joi.ObjectId().required(),
        post:Joi.ObjectId().required(),
        comment:Joi.string()
    }
    return Joi.validate(comment,schema);

}

exports.validate=validateComment;
exports.Comment=Comment;