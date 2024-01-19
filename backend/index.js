const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const cookieParser =require('cookie-parser');
const PORT=5000;
const app = express();
const connection = require('./connection');

connection().then(()=>{
    
    const userRouter = require('./routes/userRouter');
    app.use(cors());
    app.options('*', cors());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use('api/v1',userRouter);
    
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})

module.exports= app;