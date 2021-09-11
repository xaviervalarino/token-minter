const { ipcMain } = require('electron');
const queryString = require('query-string');

module.exports = function handleModal(createModal) {
  let modal, view
  ipcMain.handle('openModal', async(event, arg) => {
    [modal, view] = await createModal(arg)
    return new Promise((resolve, reject) => {
      view.webContents.on('will-navigate', (e, redirect) => {
        const parsed = queryString.parseUrl(redirect)
        if ( parsed.url === 'http://localhost/') {
          resolve(parsed.query.code)
          modal.close()
        }
      });
    });
  });
  ipcMain.handle('closeModal', async(event) => {
    modal.close()
  });
}
