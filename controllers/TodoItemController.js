let db = require('../models/dbconexion');

let TodoItem = {
  listar( req, res ){
    let sql = "SELECT * FROM TodoItem";
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
    val_name = req.body.Name;
    val_notes = req.body.Notes;
    val_done = req.body.Done;;
    let sql = "INSERT INTO TodoItem(Name,Notes,Done) VALUES(?,?,?)";
    db.query(sql,[val_name,val_notes,val_done],function(err, newData){
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
    let sql = "SELECT * FROM TodoItem WHERE ID=?";
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
    val_name = req.body.Name;
    val_notes = req.body.Notes;
    val_done = req.body.Done;
    let sql = "UPDATE TodoItem SET Name=?, Notes=? , Done=? WHERE ID=?";
    db.query(sql,[val_name,val_notes,val_done,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM TodoItem WHERE ID=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.sendStatus(200);
      }
    });
  }
}

module.exports = TodoItem;
