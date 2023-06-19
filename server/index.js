const express = require("express");
const { db } = require("./config/db");

const app = express();

const cors = require("cors");

const { webUserRoutes } = require("./routes/webUserRoute");

require("dotenv").config();
app.use(express.json());
app.use(cors());
db.connect();

app.use("/api/webuser", webUserRoutes);

app.listen(3300);
