const sqlite = require("better-sqlite3")

exports.idihoy = (data,direccion)=>{
    const db = new sqlite(direccion);
    const sql = 'SELECT * FROM tabla_idi WHERE fecha = ?';    
    let query = db.prepare(sql).get(data);
    return query;
}

exports.guardar = (data,direccion)=>{
    const db = new sqlite(direccion);
    const sql = 'INSERT INTO tabla_idi VALUES (?,?,?)';
    let query = db.prepare(sql).run(data);
    return query;
}

/*
var dbmng = require("../src/models/dbmgr");
var db = dbmng.db;

exports.idihoy = (data)=>{
    const sql = 'SELECT * FROM tabla_idi WHERE fecha = ?';
    let query = db.prepare(sql).get(data);
    return query;
}

exports.guardar = (data)=>{
    const sql = 'INSERT INTO tabla_idi VALUES (?,?,?)';
    let query = db.prepare(sql).run(data);
    return query;
}
*/