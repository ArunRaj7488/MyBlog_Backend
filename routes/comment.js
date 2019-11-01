const router=require('express').Router();
const {Comment,validate}=require('../models/comment');
//router.use(express.json());

router.get('/',async(req,res)=>{
    const comment=await Comment.find()
    .populate('user', 'name')
    .select('user comment')
    res.send(comment);
})

router.post('/',async(req,res)=>{
    const {error}=validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    const comment=new Comment(req.body)
    await comment.save();
    res.send({error:false,status:true,result:'Comment Succssesfully save'});
})

module.exports=router;