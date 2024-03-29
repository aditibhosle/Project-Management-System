const PORT = process.env.PORT || 5000;
require("./db/db");
require("./strategy/passport-jwt");
const express = require("express");
const cors = require("cors");

const app = express();
const passport = require("passport");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", require("./routes/auth"));


app.use("/", (req, res) => res.send("Welcome to the API"));

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
