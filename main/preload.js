const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld( 'api', {
  getStore: (key) => {
    return ipcRenderer.invoke('getStore', key);
  },
  setStore: (...args) => {
    const [ key, value ] = args;
    return ipcRenderer.invoke('setStore', key, value);
  },
  openModal: (url) => {
    return ipcRenderer.invoke('openModal', url);
  },
  closeModal: () => {
    return ipcRenderer.invoke('closeModal');
  }
})
