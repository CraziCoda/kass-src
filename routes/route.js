const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { title: "KASS || HOME", style: "../styles/style.css"});
});
router.get("/panel", (req, res)=>{
  res.render("./pages/panel.hbs", {title: "Admin || Login", style: "../styles/login.css"});
});

router.get("/administration", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || Adminstration", style: "../styles/login.css"})
});

router.get("/articles", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || Articles", style: "../styles/login.css"})
});

router.get("/src", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || S.R.C", style: "../styles/login.css"})
});

router.get("/programmes", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || Programmes", style: "../styles/login.css"})
});

router.get("/houses", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || Houses", style: "../styles/login.css"})
});

router.get("/alumni", (req, res)=>{
  res.render("./pages/underdev.hbs", {title: "KASS || Alumni", style: "../styles/login.css"})
});
module.exports = router;
