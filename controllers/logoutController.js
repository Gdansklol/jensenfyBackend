const db = require("../models");
const User = db.users;

const handleLogout = async (req, res) => {
  // create blank jwt that literally expires in one millesecond 
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

module.exports = { handleLogout }