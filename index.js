const express= require('express'); // importing express.js
const bodyParser=require('body-parser'); // make capabel to server to accept the json format request from miner 
const Blockchain=require('./blockchain'); //importing our blockchain
const PublishSubscribe=require('./publish_subscribe'); // import for using the publish subscribe model
const crossEnv=require('cross-env');
const request=require('request');
const blockchain=new Blockchain();
const app=express();// make object of express framework class
// console.log(blockchain.chain);
const pubsub= new PublishSubscribe({blockchain});
setTimeout(() => {
    pubsub.broadcastChain()
},1000);
app.use(bodyParser.json());
app.get('/api/blockchain',(req,res)=>{
   res.json(blockchain.chain); // return the response of currently generated block
});
app.post('/api/blockchain/mine',(req,res)=>{
    const {data}=req.body;
    blockchain.addBlock({data});
    pubsub.broadcastChain(); // broadcast the block when added in blockchain
    res.redirect('/api/blockchain');
});

const DEFAULT_PORT=3000;
const ROOT_NODE_ADDRESS=`http://localhost:${DEFAULT_PORT}`;
let PEER_PORT;
const syncChain=()=>{
    request({url:`${ROOT_NODE_ADDRESS}/api/blockchain`},(error,response,body)=>{
        if(!error && response.statusCode==200){
            const rootChain=JSON.parse(body);
            console.log('Replace Chain on sync with',rootChain);
            blockchain.replaceChain(rootChain);
        } // means everything look goods
    })
}
if(process.env.GENERATE_PEER_PORT==='true'){
    PEER_PORT=DEFAULT_PORT+ Math.ceil(Math.random()*1000); // generating the random port for other node
}
let PORT=PEER_PORT|| DEFAULT_PORT 
app.listen(PORT,()=>{
    console.log(`listenning to port: ${PORT}`);
    syncChain();
});
