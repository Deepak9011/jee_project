
require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express()
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const {v4 : uuidv4} = require('uuid');
// const session = require('express-session');
// #############################################################################

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
})
app.use(express.urlencoded({express:true}));
app.use(bodyParser.json());

// override with post having    ?_method=PATCH
app.use(methodOverride('_method'));

const port = process.env.PORT
app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
});

app.get('/', (req,res)=>{
    // res.json({mssg:'welcome to the app'});
    res.send('Hello world')
});

app.get('/register',(req,res)=>{
    res.render('./src/components/login_register/Register.js');
});
