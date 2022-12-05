//contextBridge获取变量
// const information = document.getElementById('info')
// information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`
// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // 打印 'pong'
//     information.innerText = response
// }
// func()

//渲染器进程向主进程通信（单向）
// const setButton = document.getElementById('btn')
// const titleInput = document.getElementById('title')
// setButton.addEventListener('click', () => {
//     const title = titleInput.value
//     window.electronAPI.setTitle(title)
// });


//渲染器进程向主进程通信（双向）
const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile()
    filePathElement.innerText = filePath
})

