let db = require('../models/dbconexion');
var fs = require('fs');

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
    var file = req.files.file;
    var temp = file.path;
    var tag_path = './public/images/'+ file.name;
  
    console.log(tag_path);
    console.log(file.name);
    let nombre_archivo = file.name;
    let ruta_archivo = tag_path;

    fs.copyFile(temp,tag_path,function(err)
    {
        if (err) throw err;        
        fs.unlink(temp, function() {
          if (err) throw err;
          res.status(200).send('File uploaded to: ' + tag_path);          
        });
            
    });  

    val_nombre = req.body.nombre;
    val_tipo = req.body.tipo;
    val_precio = req.body.precio;
    val_cantidad = req.body.cantidad;
    let sql = "INSERT INTO productos(nombre,tipo,precio,cantidad,nombre_archivo,ruta_archivo) VALUES(?,?,?,?,?,?)";
    db.query(sql,[val_nombre,val_tipo,val_precio,val_cantidad,nombre_archivo,ruta_archivo],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        //res.json(newData);
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
    let sql = "UPDATE productos SET nombre=?, tipo=? , precio=?, cantidad=? WHERE Id=?";
    db.query(sql,[val_nombre,val_precio,val_id,val_tipo,val_cantidad],function(err, newData){
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
