import Web3 from 'web3'
import contractAbi from '../config/abi.json'
import { toast } from 'react-toastify';

let Contract = require("web3-eth-contract");
Contract.setProvider("https://rpc-mainnet.maticvigil.com")
export const connectToWallet = async () => {//connect the metamask using web3 and get current user account
    let web3;
    try {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum)
            await window.ethereum.request({ method: 'eth_requestAccounts' })
        } else if (window.web3) {
            web3 = new Web3(window.web3.currentProvider || "https://rpc-mainnet.maticvigil.com")
        }
        const accounts = await web3.eth.getAccounts();
        return accounts[0]
    } catch (error) {
        // console.log("Error: ", error)
        return false
    }
}

export const getWeb3 = async () => {//first connect the EVM and return web3 instance. always use!
    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
    } else if (window.web3) {
        await window.web3.currentProvider.enable();
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('No web3 instance detected.');
        return false;
    }
    return web3;
}

export const web3_contact_balance = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const res = await extraMaticContract.methods.getSiteInfo().call()
        let contact_balance = web3.utils.fromWei(res['_contractBalance'])
        // console.log("contract_balance" + res['_contractBalance'])
        return contact_balance
       
    } catch (e) {
        console.log("failed")
        return false;
    }
}

export const web3_total_deposit = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        toast.error("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const res = await extraMaticContract.methods.getSiteInfo().call()//get total staked money value
        let total_deposit = web3.utils.fromWei(res['_totalInvested'])
        // console.log("total_deposit" + res['_totalInvested'])
        return total_deposit 
       
    } catch (e) {
        return false;
    }
}

export const web3_user_deposit_count = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserAmountOfDeposits(accounts[0]).call()//get total staked money value
        // let contact_balance = web3.utils.fromWei(res)
        
        return res 
       
    } catch (e) {
        return false;
    }
}

export const web3_user_total_deposit = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserInfo(accounts[0]).call()//get total staked money value
        let contact_balance = web3.utils.fromWei(res['totalDeposit'])
        return contact_balance 
       
    } catch (e) {
        return false;
    }
}

export const web3_user_total_withdraw = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserInfo(accounts[0]).call()//get total staked money value
        let contact_balance = web3.utils.fromWei(res['totalWithdrawn'])
        return contact_balance 
       
    } catch (e) {
        return false;
    }
}

export const web3_user_referral_bonus = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserReferralTotalBonus(accounts[0]).call()//get total staked money value
        let contact_balance = web3.utils.fromWei(res)
        return contact_balance 
       
    } catch (e) {
        return false;
    }
}

export const web3_referred_users = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserTotalReferrals(accounts[0]).call()//get total staked money value
        // let contact_balance = web3.utils.fromWei(res)
        return res 
       
    } catch (e) {
        return false;
    }
}

export const web3_available_balance = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        console.log("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const accounts = await web3.eth.getAccounts();
        const res = await extraMaticContract.methods.getUserAvailable(accounts[0]).call()//get total staked money value
        let contact_balance = web3.utils.fromWei(res)
        return contact_balance 
       
    } catch (e) {
        return false;
    }
}

export const stakeMATIC = async (referral_address , amount, planId) => {//stake amount of BNB to the planId's plan
    const web3 = await getWeb3();
    if (!web3) {
        toast.error("No web3 instance found.");
        return false;
    }
    try {
        let connectedAddress = await connectToWallet();
        console.log(connectedAddress);
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );
        const txCount = await web3.eth.getTransactionCount(connectedAddress);
        console.log(referral_address);
        if(!referral_address)
        var referrer = "0x2D19c11f66BE26Ba13333C428aD2050630B8176b"
        else referrer = referral_address
        console.log(referrer);
        const myNewData = await extraMaticContract.methods.invest(referrer, planId).encodeABI()
        let weiPrice = web3.utils.toWei(`${amount}`, 'ether');
        const gas2 = await web3.eth.getGasPrice()
        const transactionParameters = {
            nonce: web3.utils.toHex(txCount),
            gasPrice: web3.utils.toHex(gas2),
            // gasLimit: web3.utils.toHex(gasLimit),
            to: "0x2a2cf93bc92537a596e7956315ce914186d0242f" ,
            from: connectedAddress,
            data: myNewData,
            value: web3.utils.toHex(weiPrice)
        }

        // As with any RPC call, it may throw an error
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        
        if (txHash) {
            console.log("Transaction Done Successfully.");
        }
    } catch (e) {
        toast.error(e.message);
        return false;
    }
}

export const reinvest = async (planId) => {
    const web3 = await getWeb3();
    const amount = '0.1';
    var referrer = "0x2D19c11f66BE26Ba13333C428aD2050630B8176b"
    if (!web3) {
        toast.error("No web3 instance found.");
        return false;
    }
    try {
        let connectedAddress = await connectToWallet();
        console.log(connectedAddress);
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );
        const txCount = await web3.eth.getTransactionCount(connectedAddress);
        const myNewData = await extraMaticContract.methods.reinvest(planId).encodeABI()
        console.log(myNewData);
        let weiPrice = web3.utils.toWei(`${amount}`, 'ether');
        const gas2 = await web3.eth.getGasPrice()
        const transactionParameters = {
            nonce: web3.utils.toHex(txCount),
            gasPrice: web3.utils.toHex(gas2),
            // gasLimit: web3.utils.toHex(gasLimit),
            to: "0x2a2cf93bc92537a596e7956315ce914186d0242f" ,
            from: connectedAddress,
            data: myNewData,
            // value: web3.utils.toHex(weiPrice)
        }

        // As with any RPC call, it may throw an error
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        
        if (txHash) {
            console.log("Transaction Done Successfully.");
        }
    } catch (e) {
        console.log(e.message);
        return false;
    }
}

export const WithdrawFn = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        toast.error("No web3 instance found.");
        return false;
    }
    try {
        let connectedAddress = await connectToWallet();
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );
        const txCount = await web3.eth.getTransactionCount(connectedAddress);//get total trasaction count sent by current address
        const myNewData = await extraMaticContract.methods.withdraw().encodeABI()
        const gas2 = await web3.eth.getGasPrice()
        const transactionParameters = {
            nonce: web3.utils.toHex(txCount),
            gasPrice: web3.utils.toHex(gas2),
            // gasLimit: web3.utils.toHex(gasLimit),
            to: "0x2a2cf93bc92537a596e7956315ce914186d0242f",
            from: connectedAddress,
            data: myNewData,
        }
        // As with any RPC call, it may throw an error
        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        if (txHash) {
            toast.success("Transaction Done Successfully.");
            return
        }
    } catch (e) {
        toast.error(e.message);
        return false;
    }
}
