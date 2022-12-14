/* const express = require("express")
const app = express()
const mysql = require("mysql")
const db = mysql.createPool({
   connectionLimit: 100,
   host: "localhost",       //This is your localhost IP
   user: "root",         // "newuser" created in Step 1(e)
   password: "",  // password for the new user
   database: "restaurant",      // Database name
   port: "3306"             // port name, "3306" by default
})
db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})

// export the connection
module.exports = db */
const mysql = require("mysql");

const connection = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost", //This is your localhost IP
  user: "root", // "newuser" created in Step 1(e)
  password: "", // password for the new user
  database: "restaurant", // Database name
  port: "3306", // port name, "3306" by default
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

module.exports = connection;