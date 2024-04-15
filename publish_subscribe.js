const { json } = require('body-parser');
const Blockchain=require('./blockchain');
const blockchain=new Blockchain();
redis=require('redis') // import redis for publish subscriber model

// creating channels
const channels={
    TEST:'TEST',
    BLOCKCHAIN:'BLOCKCHAIN',
}

class PublishSubscribe{
    constructor({blockchain}){
        this.blockchain=blockchain // accepting the blockchain instance
        this.publisher=redis.createClient(); //defining the publisher
        this.subscriber=redis.createClient(); //defining the subscriber
        this.subscriber.subscribe(channels.TEST); //subscribe the channel by the subscriber
        this.subscriber.subscribe(channels.BLOCKCHAIN); // subscribe the blockchain channel by the subscriber
        this.subscriber.on('Message',(channel,message)=>this.handleMessage(channel,message));
    }
    handleMessage(channel,message){
        console.log(`Message recieved.Channel:${channel}, Message:${message}`);
        const parseMessage=JSON.parse(message);
        if(channel===channels.BLOCKCHAIN){
            this.blockchain.replaceChain(parseMessage);
        }
    }
    publish({channel,message}){
        this.publisher.publish(channel,message);
    }
    broadcastChain(){
        this.publish({
            channel: channels.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain),
        })
    }
}
/* for testing purpose:
// const checkPubSub= new PublishSubscribe();
// setTimeout(()=>checkPubSub.publisher.publish(channels.TEST,"Hello JS"),1000); 
*/
module.exports=PublishSubscribe;