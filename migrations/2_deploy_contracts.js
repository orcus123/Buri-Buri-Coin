const BuriBuriToken = artifacts.require("BuriBuriToken");

module.exports = function (deployer) {
  deployer.deploy(BuriBuriToken);
};
