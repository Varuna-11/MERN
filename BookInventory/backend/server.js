const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyPar=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyPar.json());

mongoose.connect('mongodb://localhost:27017/Book')
.then(()=>console.log('mongo connected'))
.catch((err)=>console.error(err));

const BookSchema=new mongoose.Schema({
 ISBN:{type:Number,unique:true},
 Title:String,
 Author:String
});

const Book=new mongoose.model('Book',BookSchema);

app.post('/book',async(req,res)=>{
   try{
      const b=new Book(req.body);
      await b.save();
      res.status(200).send('added');
   }
   catch(err){res.status(400).send('err');}
});

app.get('/books',async(req,res)=>{
    try{
        const s=await Book.find();
        if(!s) return res.status(404).send('not found');
        res.json(s);
    }
    catch(err){res.status(400).send('err');}
});

app.get('/book/:id',async(req,res)=>{
    try{
        const s=await Book.findOne({ISBN:req.params.id});
        if(!s) return res.status(404).send('not found');
        res.json(s);
    }
    catch(err){res.status(400).send('err');}
});

app.put('/book/:id',async(req,res)=>{
    try{
        const s=await Book.findOneAndUpdate({ISBN:req.params.id},req.body,{new:true});
        if(!s) return res.status(404).send('not found');
        res.json(s);
    }
    catch(err){res.status(400).send('err');}
});

app.delete('/book/:id',async(req,res)=>{
    try{
        const s=await Book.findOneAndDelete({ISBN:req.params.id});
        if(!s) return res.status(404).send('not found');
        res.json(s);
    }
    catch(err){res.status(400).send('err');}
});

app.listen(8000,()=>console.log('server running on 8000'));