const Joi=require('joi');
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
    descreption:{
        tpye:String,
        
    },
    tags:[{              
        type:String,
        required:true,    
    }],
    user:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    
})
 const Post=mongoose.model('Post',postSchema);
 
 async function validatSchema(post)
 {
     const schema={
         title:Joi.string().min(3).required(),
         date:Joi.date().required(),
         descreption:Joi.string().required()
     }
     return await Joi.validate(post,schema);
 }
 
 exports.Post=Post;
 exports.validate=validatSchema;

