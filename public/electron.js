const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const url = require('url');
var escritorio = app.getPath('desktop');
const direccion = path.join(escritorio,'/Modulo Contingencia/CREDITO_DB.db')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {            
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const startURL = app.isPackaged 
    ? `file://${path.join(__dirname, '/index.html')}` 
    : 'http://localhost:3000'; 
    mainWindow.loadURL(startURL);
    
    // Open the DevTools.
        if (!app.isPackaged) {
            mainWindow.webContents.openDevTools();
        }
    mainWindow.maximize();
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

  ipcMain.handle('dir', () => {
    try{
        return direccion;
    }catch(err){
        return err
    }
  })  