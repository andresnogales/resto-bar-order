const express = require("express");

const app = express();

const dbConfig = require("./db.js");
const articlesRoute = require("./routes/articleRoutes");

app.use("/api/articles", articlesRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
