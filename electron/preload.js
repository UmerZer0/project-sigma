const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  insertProduct: (name, price) =>
    ipcRenderer.invoke("insert-product", { name, price }),
  insertStock: (product_name, quantity) =>
    ipcRenderer.invoke("insert-stock", { product_name, quantity }),
  updateStock: (quantity, product_name) =>
    ipcRenderer.invoke("update-stock", { quantity, product_name }),
  getProducts: () => ipcRenderer.invoke("get-products"),
  getStock: () => ipcRenderer.invoke("get-stock"),
});
