const TodoList = artifacts.require("todo");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
