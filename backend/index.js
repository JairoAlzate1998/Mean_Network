const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./db/db");
const Post = require("./routers/post");
const User = require("./routers/user");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/post", Post);

app.listen(process.env.PORT, () =>
  console.log("Backend server running in port ", process.env.PORT)
);

dbConnection();
