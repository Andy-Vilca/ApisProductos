let db = require('../models/dbconexion');

let productos = {
  listar( req, res ){
    let sql = "SELECT * FROM productos";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;
    val_tipo = req.body.tipo;
    val_precio = req.body.precio;
    val_cantidad = req.body.cantidad;
    val_narchivo = req.body.nombre_archivo;
    val_rarchivo = req.body.ruta_archivo;
    let sql = "INSERT INTO productos(nombre,tipo,precio,cantidad,nombre_archivo,ruta_archivo) VALUES(?,?,?,?,?,?)";
    db.query(sql,[val_nombre,val_tipo,val_precio,val_cantidad,val_narchivo,val_rarchivo],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM productos WHERE Id=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;
    val_nombre = req.body.nombre;
    val_tipo = req.body.tipo;
    val_precio = req.body.precio;
    val_cantidad = req.body.cantidad;
    val_narchivo = req.body.nombre_archivo;
    let sql = "UPDATE productos SET nombre=?, tipo=? , precio=?, cantidad=?, nombre_archivo=? WHERE Id=?";
    db.query(sql,[val_nombre,val_precio,val_id,val_tipo,val_cantidad,val_narchivo],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.paramsid;
    let sql = "DELETE FROM productos WHERE Id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = productos;
