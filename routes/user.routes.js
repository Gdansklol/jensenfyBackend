const db = require("../models");
const User = db.users;
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const jwt = require("jsonwebtoken");
const auth = require("../auth")
const verifyJWT = require('../middleware/verifyJWT')
const logOut = require("../controllers/logoutController")
const refreshTokenController = require('../controllers/refreshTokenController');


module.exports = app => {
  var router = require("express").Router();
  app.use('/api/users', router);
  // Create a new user
  router.post("/newUser", (req, res) => {
    // hash the password
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          userName: req.body.userName,
          password: hashedPassword,
        });

        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            res.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            res.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        res.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });


  // Login user rework
  router.post('/auth', auth.handleLogin);


  //   Login user
  // router.post("/login", (req, res) => {
  //   // check if User exists
  //   User.findOne({ userName: req.body.userName })
  //     // if User exists
  //     .then((user) => {
  //       // compare the password entered and the hashed password found
  //       bcrypt
  //         .compare(req.body.password, user.password)

  //         // if the passwords match
  //         .then((passwordCheck) => {

  //           // check if password matches
  //           if (!passwordCheck) {
  //             return response.status(400).send({
  //               message: "Passwords does not match",
  //               error,
  //             });
  //           }

  //           // //   create JWT token
  //           // const token = jwt.sign(
  //           //   {
  //           //     userId: user._id,
  //           //     userName: user.userName,
  //           //   },
  //           //   "RANDOM-TOKEN",
  //           //   { expiresIn: "24h" }
  //           // );

  //           //   return success response
  //           res.status(200).send({
  //             message: "Login Successful",
  //             userName: user.userName,
  //             token,
  //           });
  //         })
  //         // catch error if password do not match
  //         .catch((error) => {
  //           res.status(400).send({
  //             message: "Passwords does not match",
  //             error,
  //           });
  //         });
  //     })
  //     // catch error if User does not exist
  //     .catch((e) => {
  //       res.status(404).send({
  //         message: "User not found",
  //         e,
  //       });
  //     });

  // Log out route
  router.get('/logout', logOut.handleLogout);

  // Retrieve all users
  router.get("/", (req, res) => {
    const userName = req.query.userName;
    var condition = userName ? { userName: { $regex: new RegExp(userName), $options: "i" } } : {};
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the users."
        });
      });
  });
  router.get('/', refreshTokenController.handleRefreshToken);
  // Retrieve a single user with id
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id });
      });
    // Update a user with id
    router.put("/:id", (req, res) => {
      if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
      User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update User with id=${id}. Maybe User was not found!`
            });
          } else res.send({ message: "User was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating User with id=" + id
          });
        });
    })
    // Delete a user with id
    router.delete("/:id", (req, res) => {
      const id = req.params.id;
      User.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
          } else {
            res.send({
              message: "User was deleted successfully!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete User with id=" + id
          });
        });
    })
    //delete them all!
    router.delete("/", (req, res) => {
      User.deleteMany({})
        .then(data => {
          res.send({
            message: `${data.deletedCount} Users were deleted successfully!`
          });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users."
          });
        });
    })

    //     // free endpoint
    // app.get("/free-endpoint", (request, response) => {
    //   response.json({ message: "You are free to access me anytime" });
    // });

    // // authentication endpoint
    // app.get("/auth-endpoint", auth, (request, response) => {
    //   response.json({ message: "You are authorized to access me" });
    // });

  }
  )
}