const express = require("express");
const session = require("express-session");
const morgan = require("morgan");

const auth = require("./lib/auth");
const routes = require("./routes");

const app = express();
app.use(
  session({
    secret: "this is a secrete",
    name: "sessionId",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(auth.initialize);
app.use(auth.session);
app.use("/", routes());

app.listen(8000, () => console.log("started"));
