require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");

//enter RPC url here
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
console.log(ALCHEMY_KEY)
//enter impersonating account here
const myAccount = process.env.ACCOUNT;


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// task("unlock", "set up impersonating accounts", async () => {
//   console.log(ALCHEMY_URL)
//   //method to unlock the accounts
//   await hre.network.provider.request({
//     method: "hardhat_impersonateAccount",
//     params: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'],
//   });

//   console.log("impersonating account: " + acct);
// })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        //your rpc url here
        url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
        blockNumber: 5446693
    },
  },
  localhost: { 
    url: 'http://127.0.0.1:9000/'
  },
},
mocha : { 
  timeout: 2000000
},
  solidity: "0.7.0",
};
