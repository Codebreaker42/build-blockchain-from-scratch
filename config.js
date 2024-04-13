INITIAL_DIFFICULTY=3;
const GENESIS_DATA={
    timestamp:1,
    prevHash:'0x000',
    hash:'0x123',
    difficulty: INITIAL_DIFFICULTY,
    data:[],
    nonce: 0,
}

// exporting this GENESIS block 
module.exports={GENESIS_DATA};