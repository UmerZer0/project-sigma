const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  insertProduct: (name, price) =>
    ipcRenderer.invoke("insert-product", { name, price }),
  getProducts: () => ipcRenderer.invoke("get-products"),
  getStock: () => ipcRenderer.invoke("get-stock"),
});
