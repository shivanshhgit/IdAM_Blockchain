const AccessControl = artifacts.require("AccessControl");
const IdentityRegistration = artifacts.require("IdentityRegistration");

module.exports = function (deployer) {
  deployer.deploy(AccessControl, IdentityRegistration.address);
};
