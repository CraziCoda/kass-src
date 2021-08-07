const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const logger = require("morgan");
const session = require("express-session");
const mongoose = require('mongoose');
const favicon = require("serve-favicon");

//importing routes
const routes = require("./routes/route");

//setting global variables
const PORT = process.env.PORT || 5000;
const app = express();

//setting up view engines
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static("views"));

//adding middlewares
app.use(logger("dev"));
app.use(
  session({
    secret: "kass-src-well",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, 'assets/images/favicon_io', 'favicon.ico')))

//using imported routes
app.use("/", routes);

//setting up server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
