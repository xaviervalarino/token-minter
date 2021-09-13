const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

let mainWindow;
const createWindow = {};
const preload = path.join(__dirname, 'preload.js');

createWindow.main = function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 950,
    alwaysOnTop: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nativeWindowOpen: true,
      preload: preload
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

createWindow.modal = function () {
  const modal = {}
  modal.open = async function openModal(url) {
    modal.window = new BrowserWindow({
      parent: mainWindow,
      width: 800,
      height: 950,
      modal: true,
      show: false,
      webPreferences: {
        nativeWindowOpen: true,
        preload: preload
      }
    })
    modal.view = new BrowserView()
    const height = 100;
    modal.window.webContents.openDevTools({ mode: 'detach' })
    installExtension(REACT_DEVELOPER_TOOLS);
    modal.window.setBrowserView(modal.view)
    modal.view.setBounds({
      x: 0,
      y: height,
      width: modal.window.getBounds().width,
      height: modal.window.getBounds().height - height
    })
    modal.view.webContents.loadURL(url);
    modal.window.loadURL('http://localhost:3000#modal-controls')

    await modal.window.once('ready-to-show', modal.window.show)
    return modal;
  }
  modal.close = () => modal.window.close();
  return modal;
}

module.exports = createWindow;
