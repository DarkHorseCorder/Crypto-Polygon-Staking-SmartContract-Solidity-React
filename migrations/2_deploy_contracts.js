var MaticHeaven = artifacts.require("./MaticHeaven.sol");

module.exports = function(deployer) {
  deployer.deploy(MaticHeaven , 10000);
};