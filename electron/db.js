const Database = require("better-sqlite3");

// Initialize database
const db = new Database("Molti.db", { verbose: console.log });

// Create table if it doesn't exist
try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS "products" (
    "ID"	INTEGER NOT NULL UNIQUE,
    "Name"	TEXT DEFAULT '*product name*',
    "Price"	INTEGER DEFAULT 0,
    PRIMARY KEY("ID" AUTOINCREMENT)
  );
    CREATE TABLE IF NOT EXISTS "stock" (
    "ID"	INTEGER NOT NULL UNIQUE,
    "Product_Name"	TEXT,
    "Quantity"	NUMERIC DEFAULT 0,
    "Price"	INTEGER,
    PRIMARY KEY("ID" AUTOINCREMENT),
    FOREIGN KEY("Price") REFERENCES "products"("Price"),
    FOREIGN KEY("Product Name") REFERENCES "products"("Name") ON DELETE CASCADE ON UPDATE CASCADE
  );
  `);
  console.log("✅ Table 'products' is ready.");
} catch (err) {
  console.error("❌ Error creating table:", err);
}

// Get all products
const getAllProducts = () => {
  try {
    const products = db.prepare("SELECT * FROM products").all();
    console.log(`📦 Retrieved ${products.length} products.`);
    return products;
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    return [];
  }
};

// Get stock
const getStock = () => {
  try {
    const stock = db.prepare("SELECT * FROM stock").all();
    console.log(`📦 Retrieved ${stock.length} stock.`);
    return stock;
  } catch (err) {
    console.error("❌ Error fetching stock:", err);
    return [];
  }
};

// Get product by ID
const getProductById = (id) => {
  try {
    const stmt = db.prepare("SELECT * FROM products WHERE id = ?");
    const product = stmt.get(id);
    if (product) {
      console.log(`🔍 Found product: ${product.name} ($${product.price})`);
    } else {
      console.log(`❌ No product found with ID ${id}`);
    }
    return product;
  } catch (err) {
    console.error("❌ Error fetching product by ID:", err);
    return null;
  }
};

// Close database on exit
process.on("exit", () => {
  db.close();
  console.log("🔻 Database connection closed.");
});

// Insert a product
const insertProduct = (name, price) => {
  try {
    const stmt = db.prepare("INSERT INTO products (name, price) VALUES (?, ?)");
    const result = stmt.run(name, price);
    console.log(`✅ Product inserted: ${name} ($${price})`);
    return result;
  } catch (err) {
    console.error("❌ Error inserting product:", err);
    return null;
  }
};

// Insert stock
const insertStock = (name, quantity, price) => {
  try {
    const stmt = db.prepare(
      "INSERT INTO stock (Product_Name, Quantity, Price) VALUES (?, ?, ?)"
    );
    const result = stmt.run(name, quantity, price);
    console.log(`✅ Stock inserted: ${name} (${quantity}) ${price}`);
    return result;
  } catch (err) {
    console.error("❌ Error inserting stock:", err);
    return null;
  }
};

//Update stock
const updateStock = (quantity, name) => {
  try {
    const stmt = db.prepare(
      "UPDATE stock SET Quantity = ? WHERE Product_Name = ?"
    );
    const result = stmt.run(quantity, name);
    console.log(`✅ Stock updated: ${name} (${quantity})`);
    return result;
  } catch (err) {
    console.error("❌ Error updating stock:", err);
    return null;
  }
};

// Export functions

module.exports = {
  getAllProducts,
  getProductById,
  getStock,
  insertProduct,
  insertStock,
  updateStock,
};
