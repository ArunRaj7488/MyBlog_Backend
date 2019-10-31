const express=require('express');
const app=express();

//db 
require("./startups/db");

//routes
require("./startups/routes")(app);

const port = 5000;
app.listen(port,()=>console.log(`listening on port ${port}...`));