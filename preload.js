//contextBridge
// const { contextBridge } = require('electron')
//
// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     // 能暴露的不仅仅是函数，我们还可以暴露变量
// })


//渲染进程向主进程通信（双向）
// const { contextBridge, ipcRenderer } = require('electron')
//
// contextBridge.exposeInMainWorld('versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     ping: () => ipcRenderer.invoke('ping'),
//     // 能暴露的不仅仅是函数，我们还可以暴露变量
// })


//渲染进程向主进程通信（单向）
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})



