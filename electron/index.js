const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const {
  insertProduct,
  getAllProducts,
  getStock,
  getSale,
  getExpense,
  insertStock,
  updateStock,
} = require("./db"); // Import database functions

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Preload script
    },
  });

  win.loadURL("http://localhost:5173"); // Vite dev server
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// IPC handlers for database

ipcMain.handle("get-products", async () => {
  return getAllProducts();
});

ipcMain.handle("get-stock", async () => {
  return getStock();
});

ipcMain.handle("get-sale", async () => {
  return getSale();
});

ipcMain.handle("get-expense", async () => {
  return getExpense();
});

ipcMain.handle("insert-product", async (event, { name, price }) => {
  return insertProduct(name, price);
});

ipcMain.handle(
  "insert-stock",
  async (event, { product_name, quantity, price }) => {
    return insertStock(product_name, quantity, price);
  }
);

ipcMain.handle("update-stock", async (event, { quantity, product_name }) => {
  return updateStock(quantity, product_name);
});
