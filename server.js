if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config()
}

const express = require('express');
const ejs = require('ejs');
const engine = require('ejs-locals')
const app = express();

const indexRouter = require("./routes/index")


app.engine('ejs', engine);
app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout');


app.use(express.static('public'));
const mongoose = require('mongoose')
 mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true })


const db = mongoose.connection
db.on('error', error => console.error(error))
db.once("open", ()=>console.log("Connected to Mongoose"))

app.use('/', indexRouter)










app.listen(process.env.PORT || 3000, function(){
    console.log("listening")
});

