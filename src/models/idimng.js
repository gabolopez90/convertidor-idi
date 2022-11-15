const sqlite = require("better-sqlite3")

exports.idihoy = (direccion)=>{
    const db = new sqlite(direccion);    
    const sql = 'SELECT * FROM tabla_idi';
    let query = db.prepare(sql).get();
    return query;
}

exports.guardar = (data,direccion)=>{
    const db = new sqlite(direccion);    
    
    const sql1 = 'SELECT * FROM tabla_idi';
    let arr = db.prepare(sql1).all();
    
    const sql2 = 'DROP TABLE tabla_idi';
    db.prepare(sql2).run();
    const sql3 = 'CREATE TABLE tabla_idi (fecha, dolar, idinuevo)';
    db.prepare(sql3).run();
    
    var final = []
    for( const element of arr){
        final.push(Object.values(element));
    }

    final.unshift(data);
    console.log(final)
    let stmt = db.prepare('INSERT INTO tabla_idi VALUES (?,?,?)');
    for (const row of final) {
        stmt.run(...row); // spread each sub-array to pass the individual elements
    }  
    return stmt;
}