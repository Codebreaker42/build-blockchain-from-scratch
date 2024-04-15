const Blockchain = require('./blockchain');

const blockchain= new Blockchain();
blockchain.addBlock({data:'Blockchain'});
let prevTimeStamp,nextTimeStamp,nextBlock,timeDifference,averageTime
const time=[]
for(let i=0;i<1000;i++){
    prevTimeStamp=blockchain.chain[blockchain.chain.length-1].timestamp;
    blockchain.addBlock({data: `block ${i}`});
    nextBlock=blockchain.chain[blockchain.chain.length-1];
    nextTimeStamp=nextBlock.timestamp;
    timeDifference=nextTimeStamp-prevTimeStamp;
    time.push(timeDifference);
    averageTime=time.reduce((total,num)=>(total+num))/time.length; // reduce(): to calculate the average 
    console.log(`Time to mine Block: ${timeDifference}ms, Difficulty: ${nextBlock.difficulty},Avg Time:${averageTime}ms`);
}
