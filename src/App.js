import React, {useEffect, useState} from "react";
import headerback from './assets/header.png';
import logo from './assets/PolygonLogo.png';
import contactIcon from './assets/ClipboardText.png'
import './App.css';
import {connectToWallet, web3_contact_balance , web3_total_deposit , web3_user_deposit_count , web3_user_total_withdraw , web3_user_total_deposit , web3_user_referral_bonus , web3_available_balance , stakeMATIC, reinvest , WithdrawFn , web3_referred_users} from './utils/web3API'

function App() {
  const [ walletAddress, setWalletAddress ] = useState("")
  const [contact_balance , setContactBalance ] = useState(0.000)
  const [total_deposit , setTotalDeposit] = useState(0)
  const [user_deposit_count , setUserDepositCount] = useState(0)
  const [user_total_deposit , setUserTotalDeposit] = useState(0.000)
  const [user_total_withdraw , setUserTotalWithdraw] = useState(0.000)
  const [user_referral_bonus , setUserReferralBonus] = useState(0.000)
  const [referred_user , setReferredUsers] = useState(0.000)
  const [amount_plan1, setAmountPlan1] = useState(0.000)
  const [amount_plan2, setAmountPlan2] = useState(0.000)
  const [referral_address, setReferralAddress] = useState("")
  const [reinvest_show , setReinvestShow] = useState("")
  const [available_balance , setAvailableBalance] = useState(0)
  // const reinvest_show = false
  useEffect(()=> {

    if(!walletAddress){   
     walletConnect()
     getContactBalance()
     getTotalDeposit()
     getUserDepositCount()
     getUserTotalDeposit()
     getUserTotalWithdraw()
     getUserReferralBonus()
     getReferredUsers()
     getUserAvailableBalance()
    }

    // getUSDValue()
  })

  const walletConnect = async () => {
    const res = await connectToWallet()//connect to metamask
    setWalletAddress(res)//set wallet adderess as the res
  }
  
  const getContactBalance = async () => {//get Contract balance
    const res = await web3_contact_balance()
    setContactBalance(parseFloat(res).toFixed(4))
  }
  const getTotalDeposit = async () => {//get Total deposit
    const res = await web3_total_deposit()
    console.log(res)
    setTotalDeposit(parseFloat(res).toFixed(4))
  }
  const getUserDepositCount = async () => {//get User deposit count
    const res = await web3_user_deposit_count()
    setUserDepositCount(res)
  }
  const getUserTotalDeposit = async () => {//get user total deposit
    const res = await web3_user_total_deposit()
    setUserTotalDeposit(parseFloat(res).toFixed(4))
  }
  const getUserTotalWithdraw = async () => {//get user total withdraw
    const res = await web3_user_total_withdraw()
    setUserTotalWithdraw(parseFloat(res).toFixed(4))
  }
  const getUserReferralBonus = async () => {//get user referral bonus
    const res = await web3_user_referral_bonus()
    setUserReferralBonus(res)
  }
  const getReferredUsers = async () => {//get referred users
    const res = await web3_referred_users()
    setReferredUsers(res)
  }
  const getUserAvailableBalance = async () => {
    const res = await web3_available_balance()
    setAvailableBalance(parseFloat(res).toFixed(4))
  }

  const formattedAddress = () => {
    if(walletAddress) {
      return `${walletAddress.slice(0,5)}...${walletAddress.slice(-5)}`
    }
  }
  const callStakePlan1 = async () => {
    var ref_add = document.getElementById('wallet_address').value
    const res = await stakeMATIC(ref_add , amount_plan1, 0)
    return res 
  }
  const callStakePlan2 = async () => {
    var ref_add = document.getElementById('wallet_address').value
    const res = await stakeMATIC(ref_add , amount_plan2, 1)
    return res 
  }
  const Reinvest_show = () => {
    if(reinvest_show === false)
    setReinvestShow(true)
      else setReinvestShow(false)
    console.log(reinvest_show)
  }
  const Reinvest = async (plan) => {
    const res = await reinvest(plan)
    return res
  }
  const Withdraw = async () => {
    const res = await WithdrawFn()
    return res
  }
  const PasteWalletAddress = async() => {
    const text = await navigator.clipboard.readText();
    console.log(text)
    document.getElementById('wallet_address').value = text
  }

// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="header-logo" style={{ backgroundImage: `url(${headerback})`, backgroundSize : 'cover' }}>
          <div>
            <p className='maintitle primary-title m-5 mt-3 mb-0  text-start'>
              Extra Matic
            </p>
            <p className='primary-title m-5 mt-0 text-start'>
              by Polygon
            </p>
          </div>
          <div>
          {/* <button className='connect-wallet m-5'> */}
            <button className='connect-wallet m-5'  onClick={()=> {walletConnect()}}>
            <span>
              { walletAddress ? formattedAddress () : "Connect to Wallet" }
              </span>
            </button>
          </div>
        </div>
        <div>
        <p className='header-content primary-title header-content'>
          Extra Matic is an ROI smart contract platform powered by the Polygon Matic network, aiming to provide long term sustainable income
        </p>
        </div>
      </header>
      <main>
        <div className='mainpart-one'>
          <button className='contact-btn'>
            Audit
          </button>
          <button className='contact-btn'>
            Contract
          </button>
          <button className='contact-btn'>
            Telegram
          </button>
        </div>
        <div className='container-fluid custom-p-5'>
          <div className='row custom-p-5 d-flex justify-content-between'>
            <div className='col-xl-3 col-lg-4 col-md-12 col-sm-12 py-3'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12'>
                  <div className='plan-subpart mb-2'>
                    <p className='secondary-title p-5' id='contract-balance'>
                      {contact_balance}
                    </p>
                    <p className='secondary-subtitle p-2'>
                      Contract Balance
                    </p>
                  </div>
                </div>
                <div className='col-xl-12 col-lg-12 col-md-6 col-sm-12'>
                  <div className='plan-subpart'>
                    <p className='secondary-title p-5' id='total-deposit'>
                      {total_deposit}
                    </p>
                    <p className='secondary-subtitle p-2'>
                      Total Deposit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3'>
              <div className='primary-header d-flex justify-content-center'>
                <p className='primary-title'>
                  Plan 1
                </p>
              </div>
              <div className='primary-body p-5 pb-1'>
                <div className='plan-deadline rounded-pill'>
                  <p className='py-3 primary-title'>
                    17% daily<br></br> for 8 days
                  </p>
                </div>
                <p className='plan-totalvalue'>
                  total 136%
                </p>
                <div>
                  <input type="text" pattern="[0-9]*" className='plan-valueinput' onChange={(e)=> {setAmountPlan1(e.target.value)}}>

                  </input>
                </div>
                <div>
                  <button className='deposit-btn primary-title' onClick={() => callStakePlan1()} disabled={amount_plan1 ? false : true}>
                  Deposit
                  </button>
                </div>  
                <div className='secondary-content pt-4 pb-3'>
                  Minimum deposit 0.1 Matic
                </div>
              </div>
              
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3'>
              <div className='primary-header d-flex justify-content-center'>
                <p className='primary-title'>
                  Plan 2
                </p>
              </div>
              <div className='primary-body p-5 pb-1'>
                <div className='plan-deadline rounded-pill'>
                  <p className='py-3 primary-title'>
                  7% daily<br></br> for 60 days
                  </p>
                </div>
                <p className='plan-totalvalue'>
                  total 420%
                </p>
                <input type="text" pattern="[0-9]*" className='plan-valueinput' onChange={(e)=> {setAmountPlan2(e.target.value)}}>

                </input>
                <div>
                  <button className='deposit-btn primary-title'  onClick={() => callStakePlan2()} disabled={amount_plan2 ? false : true}>
                  Deposit
                  </button>
                </div>
                <div className='secondary-content pt-4 pb-3'>
                  Minimum deposit 0.1 Matic
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid custom-p-5'>
          <div className='row custom-p-5 d-flex justify-content-between'>
            <div className='col-lg-6 col-md-12 col-sm-12 pt-5 custom-pr-10'>
              <div className='primary-header d-flex justify-content-center'>
                <div>
                  <p className='primary-title'>
                    Personal Dashboard
                  </p>
                </div>
              </div>
              <div className='primary-body'>
                  <div className='container row'>
                    <div className='col-xs-12 col-sm-4  d-flex  align-items-center justify-content-center'>
                      <div>
                      <p className='secondary-title'>{available_balance}</p>
                      <p className='secondary-subtitle'>Available Balance</p>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-4 py-3'>
                      <div>
                        <button className='secondary-background my-2 primary-subtitle' onClick={() => Reinvest_show()}>
                          Reinvest
                        </button>
                      </div>
                      <div className={reinvest_show ? "show" : "hidden"}>
                        <button className='secondary-background my-2 primary-subtitle reinvest_btn' onClick={() => Reinvest(0)}>
                          Reinvest Plan1
                        </button>
                        <button className='secondary-background my-2 primary-subtitle reinvest_btn' onClick={() => Reinvest(1)}>
                          Reinvest Plan2 with 5%bonus
                        </button>
                      </div>
                      <div>
                        <button className='secondary-background my-2 primary-subtitle' onClick={() => Withdraw()}>
                          Withdraw
                        </button>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-4 d-flex align-items-center justify-content-center'>
                      <img src={logo} alt = 'logo'></img>
                    </div>
                  </div>
                  <div className='container row'>
                    <div className='secondary-background dashboard-content'>
                      <p className='primary-content text-start pt-3'>- Minimum reinvest 0.1 MATIC, Get 5% reinvest bonus on 60 days plan.</p>
                      <p className='primary-content text-start'>
                        - Minimum withdrawal 1 MATIC, and 20% of each withdrawal will be converted to auto reinvest on 60 days plan with 5% reinvest bonus
                      </p>
                    </div>
                  </div>
                  <div className='container row py-3'>
                    <div className='col-xs-12 col-sm-6 p-2'>
                      <div className='secondary-background pt-2'>
                        <p className='primary-title pb-0 mb-0'>{user_deposit_count}</p>
                        <p className='primary-subtitle'>Deposit Count</p>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 p-2'>
                      <div className='secondary-background pt-2'>
                        <p className='primary-title pb-0 mb-0'>{user_total_deposit}</p>
                        <p className='primary-subtitle'>Total Deposit</p>
                      </div>
                    </div>
                  </div>
                  <div className='container row pb-3'>
                    <div className='col-xs-12 col-sm-6 p-2 '>
                      <div className='secondary-background pt-2'>
                        <p className='primary-title pb-0 mb-0'>{user_total_withdraw}</p>
                        <p className='primary-subtitle'>Total Withdraw</p>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 p-2 '>
                      <div className='secondary-background pt-2'>
                        <p className='primary-title pb-0 mb-0'>{user_referral_bonus}</p>
                        <p className='primary-subtitle'>Total Referral Bonus</p>
                      </div>
                    </div>
                  </div>
                </div>
              <div>
                <div className='primary-header d-flex justify-content-center mt-5'>
                  <p className='primary-title'>
                    Referral
                  </p>
                </div>
                <div className='primary-body'>
                  <p className='secondary-title'>level 1      =      5%</p>
                  <p className='secondary-title'>level 2      =      3%</p>
                  <p className='secondary-title'>level 3      =      1%</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 pt-5 custom-pl-10'>
              <div>
                <div className='primary-header d-flex justify-content-center'>
                  <p className='primary-title'>
                    Your Deposits
                  </p>
                </div>
                <div className='primary-body py-4'>
                  <p className='py-3'></p>
                </div>
              </div>
              <div className=' my-5'>
                <div className='primary-header d-flex justify-content-center'>
                  <p className='primary-title'>
                    Your Referral Link
                  </p>
                </div>
                <div className='primary-body p-4'>
                  <div className='row'>
                    <div className='col-10'>
                      <input className='plan-valueinput' id="wallet_address" onChange={(e)=> {setReferralAddress(e.target.value)}}></input>
                    </div>
                    <div className='col-2'>
                      <button className='primary-background'  onClick={PasteWalletAddress}><img src={contactIcon} alt = 'paste address'></img></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plan-subpart'>
              <p className='secondary-title py-5 m-0'>{referred_user}</p>
              <p className='secondary-subtitle'>Referred Users</p>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='p-4'>
          <div className='footer-part'>
            <button className='footer-contact-btn'>
              HazeCrypto audit
            </button>
            <button className='footer-contact-btn'>
              Contract
            </button>
            <button className='footer-contact-btn'>
              Telegram
            </button>
          </div>
        </div>
        <div>
          <p className='primary-title px-2'>
            Copyright © 2022 ExtraMatic.app . All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
