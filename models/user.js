const Joi=require('joi')
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    email:{
        type:String,
        minlengt:8,
        maxlength:30,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});
const User= mongoose.model('User',userSchema);

 async function validateUser(user){
     const schema={
         name:Joi.string().min(3).required(),
         email:Joi.string().min(8).required(),
         phone:Joi.number().required()
        }
        return await Joi.validate(user,schema)
 }
exports.User=User;
exports.validate=validateUser;
