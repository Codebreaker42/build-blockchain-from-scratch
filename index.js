const express= require('express'); // importing express.js
const bodyParser=require('body-parser'); // make capabel to server to accept the json format request from miner 
const Blockchain=require('./blockchain'); //importing our blockchain
const blockchain=new Blockchain();
const app=express();// make object of express framework class
const PORT=3000;


app.use(bodyParser.json());
app.get('/api/blockchain',(req,res)=>{
   res.json(blockchain.chain); // return the response of currently generated block
});
app.post('/api/blockchain/mine',(req,res)=>{
    const {data}=req.body;
    blockchain.addBlock({data});
    res.redirect('/api/blockchain');
});
app.listen(PORT,()=>{
    console.log(`listenning to port: ${PORT}`);
});
