# Building a Blockchain from Scratch

In this project, we create a blockchain from scratch using JavaScript.

## Files Description

- **config.js**: Contains the logic of the genesis block.
- **crypto_hash.js**: Generates the hash code by taking the value of timestamp, previous hash, and data.
- **block.js**: Contains the logic for creating blocks.
- **blockchain.js**: Implements the actual blockchain.
- **average_time.js**: Calculates the average time of mined blocks.
- **index.js**: Uses Express.js library to connect the miner in a website or server.

### index.js File Description
- **Publish-Subscribe Model**:
  - **Publish**: Miner mines the block in a network.
  - **Channel**: Information of block.
  - **Subscriber**: Gets the information of block which subscriber subscribes to which channel.
- **Dependencies**:
  - **redis (version 2.8.0)**: Required for taking the JSON response by the Node server.
  - **cross-env (version 5.2.0)**: Required to run multiple nodes (miners) to change the port dynamically.
  - **request (version 2.88.0)**: Used to sync all peer nodes getting the whole information about blockchain.

## How to Use

1. Open the Redis server.
2. Install the Postman application for making requests to add blocks using the POST method.
3. Run `npm run dev` to start the index.js file for the admin node.
4. Run `npm run dev-peer` to start the index.js file for all other nodes in the blockchain.

## Additional Notes

- Ensure that all dependencies are installed using `npm install`.
- Configure the ports and other settings as needed in the respective files.
