const router = require("express").Router();
const { post } = require("../../models");

// creating a post
router.post("/", async (req, res) => {
  try {
    // handle creating a new post here
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// getting a post
router.get("/", async (req, res) => {
  try {
    if (!req.session.logged_in) {
      // redirect to login page if not logged in
      return res.redirect("/login");
    }
    // render the dashboard view
    res.render("dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a post
router.delete("/", async (req, res) => {
  try {
    // handle deleting a post here
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a post
// router.update("/", async (req, res) => {
//   try {
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
