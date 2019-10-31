const router=require('express').Router();
const {Post,validate}=require('../models/post');


router.get('/',async(req,res)=>{
    const {user}=req.query;
    const post=await Post.find({user})
    res.send(post);
    

    // const pst=await Post
    // .find()
    // .populate('user','name')
    // .select('title user')
    // res.send(pst);

    
})
router.post('/',async(req,res)=>{
    const {error}= validate(req.body)
    if(error) res.status(404).send(error.details[0].message)

    const pst= new Post(req.body);
    await pst.save();
    res.send({error: false,status:true,result:'Post succssesfully saved'});


})
module.exports=router;