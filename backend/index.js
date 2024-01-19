const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const cookieParser =require('cookie-parser');
const PORT=5000;
const app = express();

app.use(cors());


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})