const { ipcMain } = require('electron');
const queryString = require('query-string');

module.exports = function handleModal(modal) {
  const thisModal = modal();
  ipcMain.handle('openModal', async (_, url) => {
    const { window, view } = await thisModal.open(url);
    return new Promise((resolve) => {
      view.webContents.on('will-navigate', (_, redirect) => {
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
