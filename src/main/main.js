const {app, BrowserWindow} = require('electron');
let win;
__dirname = `${__dirname}/..`

function makeWin() {
  win = new BrowserWindow({
    width: 800,
    height: 500,
    backgroundColor: '#222'
  });
  win.loadFile(`${__dirname}/renderer/index.html`);
}
app.on('ready', () => {
  makeWin();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});
app.on('activate', () => {
  makeWin();
})
