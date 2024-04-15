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
        this.blockchain=blockchain; // accepting the blockchain instance
        // console.log(this.blockchain);
        this.publisher=redis.createClient(); //defining the publisher
        this.subscriber=redis.createClient(); //defining the subscriber
        this.subscriber.subscribe(channels.TEST); //subscribe the channel by the subscriber
        this.subscriber.subscribe(channels.BLOCKCHAIN); // subscribe the blockchain channel by the subscriber
        this.subscriber.on('message',(channel,message)=>
        this.handleMessage(channel,message)
      );
    }
    handleMessage(channel,message){
        // console.log('hello');
        console.log(`Message recieved.Channel:${channel}, Message:${message}`);
        const parseMessage=JSON.parse(message);
        // console.log(parseMessage);
        if(channel===channels.BLOCKCHAIN){
            console.log('k');
            this.blockchain.replaceChain(parseMessage);
        }
    }
    publish({channel,message}){
        // console.log(channel);
        // console.log(message);
        this.publisher.publish(channel,message);
    }
    broadcastChain(){
        // console.log(this.blockchain);
        this.publish({
            channel: channels.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain),
        })
    }
}
/* for testing purpose:
const checkPubSub= new PublishSubscribe(({blockchain:'b1'}));
setTimeout(()=>checkPubSub.publisher.publish(channels.TEST,"Hello JS"),1000); 
*/
module.exports=PublishSubscribe;