let db = require('../models/dbconexion');

let Personas = {
  listar( req, res ){
    let sql = "SELECT * FROM Personas";
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
    val_apellido = req.body.apellido;
    val_sexo = req.body.sexo;
    val_fecha = req.body.fecha_nacimiento;
    let sql = "INSERT INTO Personas(nombre,apellido,sexo,fecha_nacimiento) VALUES(?,?,?,?)";
    db.query(sql,[val_nombre,val_apellido,val_sexo,val_fecha],function(err, newData){
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
    let sql = "SELECT * FROM Personas WHERE ID=?";
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
    val_id = req.body.ID;
    val_nombre = req.body.nombre;
    val_apellido = req.body.apellido;
    val_sexo = req.body.sexo;
    val_fecha = req.body.fecha_nacimiento;
    let sql = "UPDATE Personas SET nombre=?, apellido=? , sexo=?, fecha_nacimiento=? WHERE ID=?";
    db.query(sql,[val_nombre,val_apellido,val_sexo,val_fecha,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM Personas WHERE ID=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = Personas;
