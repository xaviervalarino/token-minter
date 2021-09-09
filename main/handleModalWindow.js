const { ipcMain } = require('electron');
const queryString = require('query-string');

module.exports = function handleModal(createModal) {
  ipcMain.handle('openModal', async(event, arg) => {
    const modal = await createModal(arg)
    return new Promise((resolve, reject) => {
      modal.webContents.on('will-navigate', (e, redirect) => {
        setTimeout( () => modal.close(), 3000)
        const parsed = queryString.parse(redirect)
        console.log('handleModal', parsed);
        resolve(parsed)
      });
    });
  });
}
