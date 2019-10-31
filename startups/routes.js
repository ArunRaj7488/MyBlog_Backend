const user=require('../routes/user');
const pst=require('../routes/post')
const express = require("express");

module.exports = (app)=>{
    //middleware
    app.use(express.json());

    //routes
    app.use('/api/user',user);
    app.use('/api/post',pst);
}