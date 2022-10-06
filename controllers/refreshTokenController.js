const db = require("../models");
const User = db.users;
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403); //Forbidden 
  // evaluate jwt 
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.userName !== decoded.userName) return res.sendStatus(403);
      const accessToken = jwt.sign(
        {
          "UserInfo": {
            "usernName": decoded.userName,
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '45s' }
      );
      res.json({ accessToken })
    }
  );
}

module.exports = { handleRefreshToken }