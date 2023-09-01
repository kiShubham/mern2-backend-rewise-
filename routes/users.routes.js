const router = require("express").Router();

const {
  getAllUsersData,
  getUserById,
  searchUserData,
} = require("../controllers/users.controllers");

const {
  validateSearchQuery,
} = require("../middlewares/validateSearchUserQuery");

router.get("/", getAllUsersData);
router.get("/search", validateSearchQuery, searchUserData);
router.get("/:uuid", getUserById);

module.exports = router;

//:uuid route should always be below /users/search , because if put ahead may be :uuid can be search, express think this ;
