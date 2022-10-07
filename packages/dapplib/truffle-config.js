require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note shift protect hidden kitchen surge gas'; 
let testAccounts = [
"0x024cf789e4aba380c01037b8829b34a5477fe611ba0c3b99310dece1758db635",
"0xe8c1c4e0fbfe8658761a43f3807ec5bb229e1fb794967775ea08c4a3607b84a1",
"0x5a59ea6ec372ad572f2ee7196ad149738ea69640bf601cee59fc3b4b383e7816",
"0x8a0340da925a467fa7143c4f0e569f9b8c47958b0245a1e4fb3c4ce713050bdf",
"0x1ec8df48e91599557f3ab47fa5521f2d86fd201a7dbf17a744fcde0af3603f6a",
"0x1a34c035ab3ff746abc203b08568bd52e5ec623048ff68189ce87d669507fa71",
"0xfe1a9e4a14bdb09cd4c566e0f05b8485ebce0b735d1835be4be4ad20671cba41",
"0x640593c24449663c055fb8da782f31eaacd502d21abb9e2a99a2bbcaae0a7dd7",
"0x4268f7e69ee37353b974d74401e1a385baa77b7ad00a49691f9e31625f9e4b8b",
"0xcd50e081d2917a571cbbeae85787f3ce5ebbb87885d657598e4cf2c7094f3f4e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


