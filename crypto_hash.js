// importing the crypto module
const crypto=require('crypto');
// const hexToBinary=require('hex-to-binary'); // importing the predefine library to convert hex code into the binary numbers
const hashValue= (...inputs)=>{ //used to take the argument as many as we want
    hash=crypto.createHash('sha256');
    hash.update(inputs.sort().join(""))// concatinate all the parameter of the function
    return hash.digest("hex"); 
}
module.exports=hashValue; // exporting the hash value
//console.log(hashValue("hello","world"));
// console.log(hashValue("world","hello")); // generated same hash value because we sort in the hashvalue() function