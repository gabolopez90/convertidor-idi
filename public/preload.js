const { contextBridge, ipcRenderer } = require('electron');
const db = require('../src/models/idimng.js')

contextBridge.exposeInMainWorld('api', {
  guardar: async (data) => {      
    try {      
      const direccion = await ipcRenderer.invoke('dir');
      const res = await db.guardar(data,direccion);
      document.getElementById('respuesta').innerText = 'Output: Datos guardados' ;
      console.log(res);
    }catch(err){
      document.getElementById('respuesta').innerText = 'Output: ' + err;
    }
  },
  leer: async(data) =>{
    try {            
      const direccion = await ipcRenderer.invoke('dir');
      const res = await db.idihoy(data,direccion);
      document.getElementById('respuesta').innerText = 'Output: ' + res;
      console.log(res);
    }catch(err){
      document.getElementById('respuesta').innerText = 'Output: ' + err;
      console.log(err);
    }
  }
})



/*
window.addEventListener('DOMContentLoaded', async () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
*/
/*
contextBridge.exposeInMainWorld('api', {
  guardar: async (data) => {      
    try {      
      const res = await ipcRenderer.invoke('save', data);
      document.getElementById('respuesta').innerText = 'Output: ' + res;
      console.log(res);
    }catch(err){
      document.getElementById('respuesta').innerText = 'Output: ' + err;
    }
  },
  leer: async() =>{
    try {            
      const res = await ipcRenderer.invoke('leer');
      document.getElementById('respuesta').innerText = 'Output: ' + res;
      console.log(res);
    }catch(err){
      document.getElementById('respuesta').innerText = 'Output: ' + err;
      console.log(err);
    }
  }
})
*/