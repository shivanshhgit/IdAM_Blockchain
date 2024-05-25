const IdentityVerification = artifacts.require("IdentityVerification");
const IdentityRegistration = artifacts.require("IdentityRegistration");

module.exports = function (deployer) {
  deployer.deploy(IdentityVerification, IdentityRegistration.address);
};
