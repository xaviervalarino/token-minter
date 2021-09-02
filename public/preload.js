const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld( 'api', {
  getStore: (key) => {
    console.log('key from getStore:', key)
    return ipcRenderer.invoke('getStore', key);
  },
  setStore: (...args) => {
    const [ key, value ] = args;
    return ipcRenderer.invoke('setStore', key, value);
  }
})
