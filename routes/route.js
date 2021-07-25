const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { title: "Kass" });
});

module.exports = router;
