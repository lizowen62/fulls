var express = require("express");
const users = require("../controller/user.controller.js");
const verifyToken = require("../middleware/auth.js");
var router = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

router.post("/create", verifyToken, users.create);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

router.get("/users", verifyToken, users.findAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Leanne Graham
 */

router.get("/users/:userId", verifyToken, users.findOne);

// Update a Note with noteId
router.put("/users/:userId", verifyToken, users.update);

// Delete a Note with noteId
router.delete("/users/:userId", verifyToken, users.delete);

module.exports = router;
