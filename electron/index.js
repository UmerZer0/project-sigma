const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { insertProduct, getAllProducts } = require("./db"); // Import database functions

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
ipcMain.handle("insert-product", async (event, { name, price }) => {
  return insertProduct(name, price);
});

ipcMain.handle("get-products", async () => {
  return getAllProducts();
});
