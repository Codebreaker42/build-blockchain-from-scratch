# Building a Blockchain from Scratch

## Overview

This project guides you through building a blockchain from scratch using JavaScript. It includes various components such as the genesis block logic, block creation, blockchain implementation, and more.

## Files Description

- **config.js**: Contains the logic of the genesis block.
- **crypto_hash.js**: Generates the hash code by taking the value of timestamp, previous hash, and data.
- **block.js**: Contains the logic for creating blocks.
- **blockchain.js**: Implements the actual blockchain.
- **average_time.js**: Calculates the average time of mined blocks.
- **index.js**: Uses Express.js library to connect the miner in a website or server.

## Features

- **Publish-Subscribe Model**:
  - **Publish**: Miner mines the block in a network.
  - **Channel**: Information of block.
  - **Subscriber**: Gets the information of block which subscriber subscribes to which channel.

- **Dependencies**:
  - **redis (v2.8.0)**: Required for taking the JSON response by the Node server.
  - **cross-env (v5.2.0)**: Required to run multiple nodes (miners) to change the port dynamically.
  - **request (v2.88.0)**: Used to sync all peer nodes getting the whole information about blockchain.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
