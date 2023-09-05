import mysql from "mysql2/promise"; // Import the mysql2/promise library

// Database configuration
const dbConfig = {
  host: "192.185.194.113",
  user: "richcott_mdshefatzeon",
  password: "00i am szs00",
  database: "richcott_test_development",
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Export a function to execute queries
export default pool;
