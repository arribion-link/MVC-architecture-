const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};

exports.addUser = (req, res) => {
  const { name } = req.body;
  if (name) User.addUser({ name });
  res.redirect('/users');
};

