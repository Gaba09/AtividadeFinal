const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');
const { fileURLToPath } = require('node:url');

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1024,
    minHeight: 700,
    show: false,
    backgroundColor: '#f7f8f5',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event, destination) => {
    const url = new URL(destination);
    const destinationDirectory = path.dirname(fileURLToPath(url));
    if (url.protocol !== 'file:' || destinationDirectory !== __dirname) {
      event.preventDefault();
    }
  });
  window.once('ready-to-show', () => window.show());
  window.loadFile(path.join(__dirname, 'desktop.html'));
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
