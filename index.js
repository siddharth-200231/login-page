const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to render the index.ejs template
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
