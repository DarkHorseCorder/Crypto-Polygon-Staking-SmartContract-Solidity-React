# Crypto Staking Pool on Polygon Chain

![website](https://github.com/DarkHorseCorder/Crypto-Polygon-Staking-SmartContract-Solidity-React/blob/master/public/screencapture-localhost-3000-2022-03-19-04_53_48.png)

I have built staking smart contract with solidity.

I have test this smart contract on Polygon test net and deploy on Polygon main net.

## How to connect Polygon test net and main net?

### Test Net
![Polygon testnet](https://wiki.polygon.technology/img/metamask/metamask-settings-mumbai.png)

### Main Net
![Polygon mainnet](https://wiki.polygon.technology/img/metamask/metamask-settings-mainnet.png)

## Project Description

![contract balance and total deposit, staking plans](https://github.com/DarkHorseCorder/Crypto-Polygon-Staking-SmartContract-Solidity-React/blob/master/public/Screenshot_2.png)

Number in “contract balance” box is: "_contractBalance” in "getSiteInfo" in Matic unit

Number in “total deposit” box is: "_totalInvested" in "getSiteInfo" in Matic unit

“deposit” in plan1 box is:  “invest” function, with amount in text box above, plan being “0” and referrer being devwallet unless the user has a referrer

“deposit” in plan2 box is:  “invest” function, with amount in text box above, with plan being “1” and referrer being devwallet unless the user has a referrer

![deposit count and total deposit, total withdraw](https://github.com/DarkHorseCorder/Crypto-Polygon-Staking-SmartContract-Solidity-React/blob/master/public/Screenshot_1.png)

Number in “Deposit count” box is: "getUserAmountOfDeposits”

Number in “total deposit” box is: "totalDeposit" from "getUserInfo"

Number in “total withdrawn” box is: “totalWithdrawn” from "getUserInfo"

Number in “total referral bonus” box is: "getUserReferralTotalBonus"
Number in “referred users” is: “getUserTotalReferrals”

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
