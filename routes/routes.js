const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    console.log()
    res.sendFile(path.join(__dirname + "../public/index.html"));
});

router.get("/api/images", (req, res) => {
  res.json("hi!");
});

module.exports = router;