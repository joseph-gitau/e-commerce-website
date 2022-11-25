const express = require("express");
const http = require("http");
const bcrypt = require("bcrypt");
const path = require("path");
const bodyParser = require("body-parser");
const database = require("./dbserver");
// var database = require("../database");
const { query } = require("express");
var mysql = require("mysql");
// const users = require("./data").userDB;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Home.html"));
});
// home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Home.html"));
});
//menu page
app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/Menu.html"));
});
// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/About.html"));
});
//register page
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/auth/Register.html"));
});
// post register
app.post("/register", (req, res) => {
    const { username, email, password, password2 } = req.body;
    // if none of the fields are empty
    if (username && email && password) {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        database.query(query, function (err, result) {
            if (err) throw err;
            console.log(result);
            // if the email is not already in the database
            if (result.length === 0) {
                // hash the password
                const hashedPassword = bcrypt.hashSync(password, 10);
                // insert the new user into the database
                const query = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${hashedPassword}')`;
                database.query(query, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    // redirect to the login page
                    res.redirect("/login");

                });
            } else {
                // if the email is already in the database
                res.redirect("/register");
            }
        });
    }
});



/* app.post("/register", async (req, res) => {
  try {
    let foundUser = users.find((data) => req.body.email === data.email);
    if (!foundUser) {
      let hashPassword = await bcrypt.hash(req.body.password, 10);

      let newUser = {
        id: Date.now(),
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      };
      users.push(newUser);
      console.log("User list", users);

      res.send(
        "<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>"
      );
    } else {
      res.send(
        "<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>"
      );
    }
  } catch {
    res.send("Internal server error");
  }
});

app.post("/login", async (req, res) => {
  try {
    let foundUser = users.find((data) => req.body.email === data.email);
    if (foundUser) {
      let submittedPass = req.body.password;
      let storedPass = foundUser.password;

      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        let usrname = foundUser.username;
        res.send(
          `<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`
        );
      } else {
        res.send(
          "<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>"
        );
      }
    } else {
      let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
      await bcrypt.compare(req.body.password, fakePass);

      res.send(
        "<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>"
      );
    }
  } catch {
    res.send("Internal server error");
  }
});
 */
server.listen(3000, function () {
  console.log("server is listening on port: 3000");
});
