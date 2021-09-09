const { ipcMain } = require('electron');
const Store = require('electron-store');
const store = new Store();

module.exports = function dataStore() {
  store.set({ data: {} });

  ipcMain.handle('getStore', (event, arg) => {
    return store.get(arg)
  });

  ipcMain.handle('setStore', (event, key, value) => {
    store.set(key, value)
    return store.get(key)
  });
}
