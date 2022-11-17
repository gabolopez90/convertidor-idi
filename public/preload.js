const { contextBridge, ipcRenderer } = require('electron');
const db = require('./idimng.js')

contextBridge.exposeInMainWorld('api', {
  guardar: async (data) => {      
    try {      
      const direccion = await ipcRenderer.invoke('dir');
      const res = await db.guardar(data,direccion);      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-success text-center'>'Datos guardados con éxito'</div>";
      console.log(res);
    }catch(err){      
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-danger text-center'>'Error: '</div>" + err;
    }
  },
  leer: async() =>{
    try {  
      const direccion = await ipcRenderer.invoke('dir');
      const res = await db.idihoy(direccion);
      document.getElementById('hoy').innerText = res.fecha;
      document.getElementById('idi').innerText = res.idinuevo;
      document.getElementById('dolar').innerText = res.dolar;
      document.getElementById('respuesta').innerHTML = "<div class='alert alert-success text-center'>'Resultado: Leído con éxito'</div>";
      
      return res;
    }catch(err){     
      document.getElementById('respuesta').innerHTML ="<div class='alert alert-danger text-center'>'Error: '</div>" + err;
      
    }
  }
})