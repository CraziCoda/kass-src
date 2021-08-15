const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { title: "KASS || HOME", style: "../styles/style.css"});
});
router.get("/panel", (req, res)=>{
  res.render("./pages/panel.hbs", {title: "Admin || Login", style: "../styles/login.css"});
});

module.exports = router;
