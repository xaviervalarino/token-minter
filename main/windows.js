const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

let mainWindow;
const appURL = app.isPackaged
  ? pathToFileURL(path.join(__dirname, '../build/index.html')).href
  : 'http://localhost:8080';

const createWindow = {};
const preload = path.join(__dirname, 'preload.js');

function installDevTools() {
  /* eslint-disable global-require */
  const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
  installExtension(REACT_DEVELOPER_TOOLS);
  /* eslint-enable global-require */
}

createWindow.main = () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 950,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nativeWindowOpen: true,
      preload,
    },
  });
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    installDevTools();
  }
  mainWindow.loadURL(appURL);
};

createWindow.modal = () => {
  const modal = {};
  modal.open = async function openModal(url) {
    modal.window = new BrowserWindow({
      parent: mainWindow,
      width: 800,
      height: 950,
      modal: true,
      show: false,
      webPreferences: {
        nativeWindowOpen: true,
        preload,
      },
    });
    modal.view = new BrowserView();
    const height = 100;
    if (!app.isPackaged) {
      modal.window.webContents.openDevTools({ mode: 'detach' });
    }
    modal.window.setBrowserView(modal.view);
    modal.view.setBounds({
      x: 0,
      y: height,
      width: modal.window.getBounds().width,
      height: modal.window.getBounds().height - height,
    });
    modal.view.webContents.loadURL(url);
    modal.window.loadURL(`${appURL}#modal-controls`);
    await modal.window.once('ready-to-show', modal.window.show);
    return modal;
  };
  modal.close = () => modal.window.close();
  return modal;
};

module.exports = createWindow;
