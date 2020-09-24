const User = require("../models/user");
const Store = require("../models/store")

module.exports = {
  index,
  
};

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}