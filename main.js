const { app, BrowserWindow } = require("electron");
const ipcMain = require("electron").ipcMain;
const firebase = require("./libs/firebase/firebase-config");
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 860,
    height: 780,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      devTools: true,
    },
  });

  // and load the index.html of the app.
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("firebase-signin", (event, data) => {
  event.returnValue = firebase.signin(data.user, data.password);
});

ipcMain.on("firebase-signup", (event, data) => {
  event.returnValue = firebase.signup(data.user, data.password);
});
