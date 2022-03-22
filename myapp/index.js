// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const shell_name = "pwsh.exe"
const option_name = "-c"
const command = ""
const command_string = shell_name.concat(' ', option_name, ' ', command)

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
var shell = require('./functionality');

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

app.get("/AD", (req, res) => {
  const command = "Get-Creds ad"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("work_commands", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/batch", (req, res) => {
  const command = '"Get-BatchDw | Select-Object -First 10"'
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("work_commands", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});


app.get("/batch_rpt", (req, res) => {
  const command = '"Get-BatchRpt | Select-Object -First 10"'
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("work_commands", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});


app.get("/batch_pref", (req, res) => {
  const command = '"Get-BatchPref | Select-Object -First 10"'
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("work_commands", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/boot", (req, res) => {
  const command = "Get-LastBootTime"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});


app.get("/cpu", (req, res) => {
	const command = "Get-CPUsage"
    const command_string = shell_name.concat(' ', option_name, ' ', command)
    shell.execShellCommand(command_string);
    res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});



app.get("/dbeaver", (req, res) => {
  const command = "Enter-DBeaver"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/dirs", (req, res) => {
  const command = "Get-ExpDirs"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("work_commands", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});


app.get("/db_tables", (req, res) => {
  const cmd = 'SQLCMD.exe -I -Q "SELECT table_catalog, table_name FROM INFORMATION_SCHEMA.TABLES ORDER BY 2"'
  shell.execShellCommand(cmd);
  res.render("database", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});


app.get("/database", (req, res) => {
  res.render("database", { title: "Database Commands" , userProfile: { nickname: "cblock" }});
});

app.get("/disk", (req, res) => {
  const command = "Get-DiskUsage"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/git", (req, res) => {
  const command = "Get-Creds git"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/local_links", (req, res) => {
  res.render("local_links", { title: "URLs", userProfile: { nickname: "cblock" } });
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

app.get("/memory", (req, res) => {
  const command = "Get-MemoryUsage"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/reboot", (req, res) => {
  const command = '"Get-Process chrome, code, dbeaver | Stop-Process; Restart-Computer"'
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/start", (req, res) => {
  const command = "Start-Programs"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/stop", (req, res) => {
  const command = "Stop-Programs"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/RDP", (req, res) => {
  const command = "'Get-Creds admin; Enter-RDP'"
  const command_string = shell_name.concat(' ', option_name, ' ', command)
  shell.execShellCommand(command_string);
  res.render("local", { title: "Execute Shell", userProfile: { nickname: "cblock" } });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "cblock" } });
});

app.get("/work_commands", (req, res) => {
  res.render("work_commands", { title: "URLs", userProfile: { nickname: "cblock" } });
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
