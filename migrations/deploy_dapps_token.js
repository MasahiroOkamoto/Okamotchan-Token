var DappsToken = newFunction();

module.exports = function(deployer){
  var initialSupply = 1000;
  deployer.deploy(DappsToken, initialSupply)
}

function newFunction() {
  return artifacts.require("./DappsToken.sol")
}
