const Joi=require('joi');
Joi.ObjectId = require("joi-objectid")(Joi)
const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,        
    },
    tags:[{              
        type:String,
        required:true,    
    }],
    user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }]
    
})
 const Post=mongoose.model('Post',postSchema);
 
 function validatSchema(post)
 {
     const schema={
         title:Joi.string().min(3).required(),
         description:Joi.string().required(),
         user: Joi.ObjectId().required(),
         comment:Joi.array().items(Joi.ObjectId()),
         tags: Joi.array().items(Joi.string())
     }
     return Joi.validate(post,schema);
 }
 
 exports.Post=Post;
 exports.validate=validatSchema;

