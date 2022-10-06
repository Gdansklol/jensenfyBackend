require("dotenv").config()
// var encrypt = require ('mongoose-encryption')

module.exports = mongoose => {
  var schema = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: [true, "Please provide a Username!"],
        unique: [true, "Username Exist"],
      },
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
      refreshToken: String
    },
    { timestamps: true }
  );


  // schema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const User = mongoose.model("user", schema);
  return User;
}; 