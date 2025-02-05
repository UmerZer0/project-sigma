const Database = require("better-sqlite3");

const db = new Database("Molti.db");

// Create the table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
`);

console.log("Database initialized successfully.");

// Function to insert a product
const insertProduct = (name, price) => {
  const stmt = db.prepare("INSERT INTO products (name, price) VALUES (?, ?)");
  return stmt.run(name, price);
};

// Function to get all products
const getAllProducts = () => {
  return db.prepare("SELECT * FROM products").all();
};

module.exports = { insertProduct, getAllProducts };
