const express = require("express");
const session = require("express-session");
const morgan = require("morgan");

const auth = require("./lib/auth");
const routes = require("./routes");
const connectDB = require("./lib/db");

const app = express();
app.use(morgan("combined"));
app.use(auth.initialize);
app.use(auth.session);
app.use("/", routes());

const PORT = process.env.PORT || 8000;
connectDB();

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
