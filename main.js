//1.引用本地文件，创建窗口
// const { app, BrowserWindow } = require('electron')
// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//     })
//
//     win.loadFile('index.html')
// }
//
// app.whenReady().then(() => {
//     createWindow()
// })


//2.加载链接，创建窗口
// const {app,BrowserWindow} = require('electron');
// const createWindow = () => {
//     const win = new BrowserWindow({ width: 800, height: 1500 })
//     win.loadURL('https://github.com')
//     const contents = win.webContents
//     console.log(contents)
//     console.log(111)
// }
// app.whenReady().then(()=>{
//     createWindow()
// })



//3.适配win和mac
// const { app, BrowserWindow } = require('electron');
//
// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//     });
//
//     win.loadFile('index.html');
// };
//
// app.whenReady().then(() => {
//     createWindow();
//
//     app.on('activate', () => {
//         if (BrowserWindow.getAllWindows().length === 0) {
//             createWindow();
//         }
//     });
// });
//
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });


// const { app, BrowserWindow } = require('electron')
// const path = require('path')
//
// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             preload: path.join(__dirname, 'preload.js'),
//         },
//     })
//
//     win.loadFile('index.html')
// }
//
// app.whenReady().then(() => {
//     createWindow()
// })


const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })
    ipcMain.handle('ping', () => 'pong')
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)
