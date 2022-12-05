//contextBridge
// const { contextBridge } = require('electron')
//
// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     // 能暴露的不仅仅是函数，我们还可以暴露变量
// })


//渲染器进程向主进程通信（双向）
// const { contextBridge, ipcRenderer } = require('electron')
//
// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     ping: () => ipcRenderer.invoke('ping'),
//     // 能暴露的不仅仅是函数，我们还可以暴露变量
// })


//渲染器进程向主进程通信（单向）
// const { contextBridge, ipcRenderer } = require('electron')
//
// contextBridge.exposeInMainWorld('electronAPI', {
//     setTitle: (title) => ipcRenderer.send('set-title', title)
// })


//渲染器进程向主进程通信（双向）
// const { contextBridge, ipcRenderer } = require('electron')
//
// contextBridge.exposeInMainWorld('electronAPI', {
//     openFile: () => ipcRenderer.invoke('dialog:openFile')
// })

//主进程向渲染进程通信
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback)
})

