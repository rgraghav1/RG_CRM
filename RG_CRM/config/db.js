const mysql = require('mysql2');    // use mysql2 package
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,       // localhost
  user: process.env.DB_USER,       // root
  password: process.env.DB_PASSWORD,// your password
  database: process.env.DB_NAME    // rgcrm
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL.');
});

module.exports = db;
