require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name response range proof harvest clog army gentle'; 
let testAccounts = [
"0x7ab2e3188d7574e2c1d09236926c262364c19a91aaca104a928a401d52cf1873",
"0xdc0ae1e9a42e290a0a3c196c24c119709057a3d273f81a9000af3499a487e91d",
"0x59bd0bd531b538800f311ff787f60078daf7c691c446308c5030d7ae1fa02771",
"0xa4d48c3ba001e58f59c73aa4e28cd14f095bdd4bc52e5e1a271188f0cb603f8e",
"0xe3368d67b39c0f8b95ee90b5df2055d5d1203dd0d6ee906d4d93ef74bfb8c733",
"0x06970e92aa3735fb5451ad42140a44f1feb9751d6bda13ef7df7e9d1378594e9",
"0x293bad00dc75aaf6cec61acb4fbcce45b9749f86e4fd374b00ef95e82d6aac85",
"0x9c0b0c3d24de440c3b9a19e1e79dd022ebcdf8fd2ca788503e84597a1c3f9bee",
"0xe4c570ea13b392358a3a7bb169f2bb3c3e87f30eea492db6ff95c57085610188",
"0xeeec7d193726b2008ce95a5f80249dde22ed10a2b4da03ff73378a8af45b2e3b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

