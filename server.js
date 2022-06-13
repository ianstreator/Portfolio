require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const axios = require("axios");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/assets", express.static(path.join(__dirname, "dist", "assets")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const WAKA_API_KEY = process.env.WAKA_KEY;
const WAKA_BASE_URL = "https://wakatime.com/api/v1/";
app.get("/waka", async (req, res) => {
  try {
    const { data: wakaRes } = await axios.get(
      `${WAKA_BASE_URL}users/Ian19/stats/last_7_days?api_key=${WAKA_API_KEY}`
    );
    res.status(200).json(wakaRes);
  } catch (err) {
    res.status(400).json({
      error: "failed to fetch, make sure you are an authorized user.",
    });
  }
});

const PORT = process.env.PORT || 4000;
const server = app.listen(
  PORT,
  console.log(`Server listening on port ${PORT}...`)
);
