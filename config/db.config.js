require('dotenv').config()

const MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://mongo:27017/users_db"

module.exports = {
  url: MONGO_DB_URL
};

//   url: "mongodb://mongo_db:27017/users_db" --potential fix for docker not connecting to db