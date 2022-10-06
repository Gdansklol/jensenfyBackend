const db = require("./models/");
const User = db.users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

  const foundUser = await User.findOne({ userName }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized 
  // evaluate password 
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    // create JWTs
    const accessToken = jwt.sign(
      {
        "UserInfo": {
          "userName": foundUser.userName,
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '45s' }
    );
    const refreshToken = jwt.sign(
      { "userName": foundUser.userName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);

    // Creates Secure Cookie with refresh token
    res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    // Send authorization and access token to user
    res.json({ accessToken });

  } else {
    res.sendStatus(401);
  }
}

module.exports = { handleLogin };