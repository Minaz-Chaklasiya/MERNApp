const express=require("express");
const mongoose=require("mongoose");

// const items=require('./routes/api/items');

const path=require("path");

const config=require("config");

const app=express();

//Boddy Parser Middleware
app.use(express.json());

//DB config
const db=config.get('mongoURI');

//Connect to mongo
mongoose
    .connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true
    })
    .then(()=>console.log("MongoDB Connected..."))
    .catch(err=>console.log(err));

//USe Routes
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

//Serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));



