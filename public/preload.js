const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld( 'api', {
  doAction: async (data) => {
    console.log('data from contextBridge:', data)
    return await ipcRenderer.invoke('an-action', data);
  }
})
