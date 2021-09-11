const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const dataStore = require('./api/dataStore');
const handleModal = require('./api/handleModalWindow');

let mainWindow;
async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 950,
    alwaysOnTop: true,
    titleBarStyle: 'hiddenInset',
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
    width: 800,
    height: 950,
    modal: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  const view = new BrowserView()
  const height = 100;
  modal.webContents.openDevTools({ mode: 'detach' })
  installExtension(REACT_DEVELOPER_TOOLS);
  modal.setBrowserView(view)
  view.setBounds({
    x: 0,
    y: height,
    width: modal.getBounds().width,
    height: modal.getBounds().height - height
  })
  view.webContents.loadURL(url);
  modal.loadURL('http://localhost:3000#modal-controls')

  await modal.once('ready-to-show', () => modal.show())
  return [modal, view];
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
