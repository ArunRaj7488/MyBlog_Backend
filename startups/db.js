const mongoose=require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/myblog')
.then(()=>console.log('connected to mongodb...'))
.catch(err=>console.log('Not connected to mongodb...',err));

