const express = require("express");
const {
  getAllUsers,
  getSingleUserById,
  updateUserById,
  deleteUser,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user.controller");
const { users } = require("../data/users.json");

const router = express.Router();

/**
 * Route : /users
 * Method: GET
 * Description: Get all users
 * Access Public
 * Parameter: None
 */

router.get("/", getAllUsers);

/**
 * Route : /users/:id
 * Method: GET
 * Description: Get single user by id
 * Access Public
 * Parameter: id
 */

router.get("/:id", getSingleUserById);

/**
 * Route : /users/:id
 * Method: POST
 * Description: Create new user
 * Access Public
 * Parameter: none
 */
router.post("/", createNewUser);

/**
 * Route : /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access Public
 * Parameter: id
 */

router.put("/:id", updateUserById);

/**
 * Route : /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access Public
 * Parameter: id
 */

router.delete("/:id", deleteUser);

/**
 * Route : /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access Public
 * Parameter: id
 */

router.get("/subscription-details/:id", getSubscriptionDetailsById);
module.exports = router;
