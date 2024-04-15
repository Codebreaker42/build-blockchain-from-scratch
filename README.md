# build blockchain from scratch
 here we build the blockchain from the scratch using javascripts

config.js: logic of genesis block
crypto_hash.js: generating the hash code by taking the value of timestamp,prevhash ,and data
block.js: logic to creating the blocks 
blockchain.js : actual blockchain 
average_time.js: to mine and add the valid block by the miner and check the average time of mined block
index.js : use express.js library to connect the minner in a website or server
index.js file description:
 - publish subscribe model:
    publish: miner mine the block in a network
    channel: information of block
    subscriber: get the information of block which subscriber subscribe which channel
 - redis2.8.0(module): required for taking the json response by the node server
 - cross-env5.2.0(module): require to run multiple node(miner) to change the port dynamically    
 -request2.88.0(module): to sync the all peer node getting the whole information about blockchain
install the postman application for the request to add block using post method

how to use:
   open the redis server
   open the postman application
   run index.js file by using (npm run dev) for admin node
   run index.js file by using (npm run dev-peer) for all other node in a blockchain