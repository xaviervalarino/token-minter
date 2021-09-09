const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const Store = require('electron-store');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

let mainWindow;
async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  let appURL;
  if ( app.isPacked ) {
    appURL = url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    })
  } else {
    appURL = 'http://localhost:3000';
    mainWindow.webContents.openDevTools({ mode: 'detach' })
    installExtension(REACT_DEVELOPER_TOOLS);
  }
  mainWindow.loadURL(appURL)
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if ( process.platform !== 'darwin' ) { app.quit() }
})
app.on('activate', () => {
  if ( BrowserWindow.getAllWIndows().length === 0 ) { createWindow(); }
})

const store = new Store();
store.set({ data: {} });

ipcMain.handle('getStore', (event, arg) => {
  return store.get(arg)
});

ipcMain.handle('setStore', (event, key, value) => {
  store.set(key, value)
  return store.get(key)
});
