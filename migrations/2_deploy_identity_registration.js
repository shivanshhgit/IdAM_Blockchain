const IdentityRegistration = artifacts.require("IdentityRegistration");

module.exports = function (deployer) {
  deployer.deploy(IdentityRegistration);
};
