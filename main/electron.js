const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const dataStore = require('./dataStore');
const handleModal = require('./handleModalWindow');

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
      pathname: path.join(process.cwd(), 'renderer/index.html'),
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

async function createModalWindow(url) {
  const modal = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    show: false
  })
  modal.loadURL(url)
  await modal.once('ready-to-show', () => modal.show())
  return modal;
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if ( process.platform !== 'darwin' ) { app.quit() }
})
app.on('activate', () => {
  if ( BrowserWindow.getAllWindows().length === 0 ) {
    createWindow();
  }
})

dataStore()
handleModal(createModalWindow)
