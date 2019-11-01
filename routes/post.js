const router=require('express').Router();
const {Post,validate}=require('../models/post');

router.get('/',async(req,res)=>{
    const post=await Post.find()
                .populate('user  name comment')
                .select('post user comment')
                
    res.send({totalPost: post.length, post});
})
router.get('/',async(req,res)=>{
    const {postId}=req.query
    const post= await Post.find({_id:postId})
    res.send(post)

})

router.post('/',async(req,res)=>{
    const {error}= validate(req.body)
    if(error) return res.status(404).send(error.details[0].message)

    const post= new Post(req.body);
    await post.save();
    res.send({error: false,status:true,result:'Post succssesfully saved'});
});

module.exports=router;