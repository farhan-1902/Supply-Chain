var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); // your web3 provider

var transaction = '0xf5c5a6934cb89d0a4a869c3b94342a15888d42fe9b5afb620108e1e7cbdd51b3';

web3.eth.getTransaction(transaction, function(err, tx){
    let tx_data = tx.input;
    let input_data = '0x' + tx_data.slice(10);  // get only data without function selector

    let params = web3.eth.abi.decodeParameters(['string', 'string'], input_data);
    console.log(params);
});