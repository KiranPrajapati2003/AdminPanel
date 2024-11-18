const express = require('express')
const cookie = require('cookie-parser')
const port = 3000;
const app = express();

const  db  = require("./config/database");
const path = require('path')

app.set('view engine','ejs')
app.use(cookie());

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + '/assets')))
app.use('/uploads',express.static(path.join(__dirname + '/uploads')))
app.use('/',require('./routers'))

app.listen(port,(err)=>{
    if(err){
        console.log('server not start');
        return false;
    }
    db()
    console.log('server start http://localhost:'+port);
})