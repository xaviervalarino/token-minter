const { ipcMain } = require('electron');
const Store = require('electron-store');

const store = new Store();

module.exports = function dataStore() {
  if (!store.get('data')) {
    store.set({ data: {} });
  }

  ipcMain.handle('getStore', (_, arg) => {
    return store.get(arg);
  });

  ipcMain.handle('setStore', (_, key, value) => {
    store.set(key, value);
    return store.get(key);
  });
};
