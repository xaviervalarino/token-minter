const { app, BrowserWindow } = require('electron');

const createWindow = require('./windows');
const dataStore = require('./api/dataStore');
const handleModal = require('./api/handleModal');

// Init
app.on('ready', createWindow.main);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow.main();
  }
});

// API
dataStore();
handleModal(createWindow.modal);
