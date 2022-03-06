var express = require("express");
var router = express.Router();
const notes = require("../controller/note.controller.js");
const verifyToken = require("../middleware/auth.js");

// Create a new Note
router.post("/create", verifyToken, notes.create);

// Retrieve all Notes
router.get("/notes", verifyToken, notes.findAll);

router.get("/aggregate", verifyToken, notes.findAggregate);

// Retrieve a single Note with noteId
router.get("/notes/:noteId", verifyToken, notes.findOne);

// Update a Note with noteId
router.put("/notes/:noteId", verifyToken, notes.update);

// Delete a Note with noteId
router.delete("/notes/:noteId", verifyToken, notes.delete);

module.exports = router;
