var express = require("express");
var router = express.Router();
const users = require("../controller/user.controller.js");
const verifyToken = require("../middleware/auth.js");

// Create a new Note
router.post("/create", verifyToken, users.create);

// Retrieve all users
router.get("/users", verifyToken, users.findAll);

// Retrieve a single Note with noteId
router.get("/users/:userId", verifyToken, users.findOne);

// Update a Note with noteId
router.put("/users/:userId", verifyToken, users.update);

// Delete a Note with noteId
router.delete("/users/:userId", verifyToken, users.delete);

module.exports = router;
