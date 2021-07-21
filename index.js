const express = require("express");

const PORT = 5000 || process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Kass");
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
