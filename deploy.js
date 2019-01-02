const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'metal only cage twin dignity invite fire peace help wasp father treat',
    'https://rinkeby.infura.io/v3/04dd5fe55e1d405983ea00cd2fb43fe1'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '2000000' });

    console.log(interface);
    console.log('Contract deployed to address', result.options.address);
};
deploy();