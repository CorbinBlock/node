// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
var shell = require('./execute_shell');

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/commands", (req, res) => {
  res.render("commands", { title: "Commands" , userProfile: { nickname: "cblock" }});
});

app.get("/shell", (req, res) => {
  const cmd = 'pwsh.exe -c "Get-LastBootTime"'
  shell.execShellCommand(cmd);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/links", (req, res) => {
  res.render("links", { title: "URLs", userProfile: { nickname: "cblock" } });
});

app.get("/local", (req, res) => {
  res.render("local", { title: "Local Commands" , userProfile: { nickname: "cblock" }});
});

app.get("/logout", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "cblock" } });
});

app.get("/work_links", (req, res) => {
  res.render("work_links", { title: "URLs", userProfile: { nickname: "cblock" } });
});

/**
 * Server Activation
 */

app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
  });
