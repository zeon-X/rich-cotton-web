// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.185.194.113",
  user: "richcott_mdshefatzeon",
  password: "00i am szs00",
  database: "richcott_test_development",
  // host: "your-database-host",
  // user: "your-database-user",
  // password: "your-database-password",
  // database: "your-database-name",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
  } else {
    console.log("Database connected");
  }
});

module.exports = db;
