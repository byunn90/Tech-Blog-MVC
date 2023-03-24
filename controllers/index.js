const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const userRoutes = require("./api/userRoutes");
const postRoutes = require("./api/postRoutes");

// Post routes are not finished yet
router.use("/", homeRoutes);
router.use("/api/users", userRoutes);
router.use("/api/dashboard", postRoutes);
module.exports = router;
