const router=require('express').Router();
const { User, validate }=require('../models/user');

router.get('/',async(req,res)=>{
    const user=await User.find();
    res.send(user);
});

//post route for user
router.post("/", async (req, res)=>{
    const {error}= validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const user = new User(req.body);
    await user.save();
    res.send({error: false, status:true, result: `User Successfully Saved!!`});
});
module.exports=router;