const Users = require("../models/user.model.js");

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Users content can not be empty",
    });
  }

  // Create a Users
  const User = new Users({
    title: req.body.title || "Untitled Users",
    content: req.body.content,
  });

  // Save Users in the database
  User.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Users.",
      });
    });
};

// Retrieve and return all Userss from the database.
exports.findAll = (req, res) => {
  Users.find()
    .then((Userss) => {
      res.send(Userss);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Userss.",
      });
    });
};

// Find a single Users with a UsersId
exports.findOne = (req, res) => {
  Users.findById(req.params.UsersId)
    .then((Users) => {
      if (!Users) {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      res.send(Users);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Users with id " + req.params.UsersId,
      });
    });
};

// Update a Users identified by the UsersId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Users content can not be empty",
    });
  }

  // Find Users and update it with the request body
  Users.findByIdAndUpdate(
    req.params.UsersId,
    {
      title: req.body.title || "Untitled Users",
      content: req.body.content,
    },
    { new: true }
  )
    .then((Users) => {
      if (!Users) {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      res.send(Users);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      return res.status(500).send({
        message: "Error updating Users with id " + req.params.UsersId,
      });
    });
};

// Delete a Users with the specified UsersId in the request
exports.delete = (req, res) => {
  Users.findByIdAndRemove(req.params.UsersId)
    .then((Users) => {
      if (!Users) {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      res.send({ message: "Users deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Users not found with id " + req.params.UsersId,
        });
      }
      return res.status(500).send({
        message: "Could not delete Users with id " + req.params.UsersId,
      });
    });
};
