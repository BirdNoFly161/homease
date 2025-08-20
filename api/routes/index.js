import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Welcome to Homease api, though you're not supposed to use it like this :)");
});

router.get("/r1", function (req, res, next) {
  res.json({ msg: "Welcome to Homease api, though you're not supposed to use it like this :)" });
});

export default router;
