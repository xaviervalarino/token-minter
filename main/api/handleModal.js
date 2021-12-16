const { ipcMain } = require('electron');
const queryString = require('query-string');

module.exports = function handleModal(modal) {
  const thisModal = modal();
  ipcMain.handle('openModal', async (event, url) => {
    const { window, view } = await thisModal.open(url);
    return new Promise((resolve, reject) => {
      view.webContents.on('will-navigate', (e, redirect) => {
        const parsed = queryString.parseUrl(redirect);
        if (parsed.url === 'http://localhost/') {
          resolve(parsed.query.code);
          window.close();
        }
      });
    });
  });
  ipcMain.handle('closeModal', thisModal.close);
};
