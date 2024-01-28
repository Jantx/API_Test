const { query, request } = require('express');
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//METHODS GET

router.get('/', (req, res) =>{
    mysqlConnection.query('SELECT * FROM Empleados;',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        }else{
            console.log(err)
        }
    })
});

router.get('/:id', (req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM Empleados WHERE id= ?', [id] ,(err,rows, fields)=>{
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err)
        }
    })

});

//METHOD POST

router.post('/', (req,res)=>{
    const{id, name, lastName, salary} = req.body;

    const query = `
    CALL empleadoAddOrEdit(?, ?, ?, ?);
    `;

    mysqlConnection.query(query,[id, name, lastName, salary],(err,rows,fields)=>{
        if (!err) {
            res.json({status:'Employeed Saved'});
        }else{
            console.log(err);
        }
    })

});

//METHOD PUT

router.put('/:id', (req, res)=>{
    const {name, lastName, salary} = req.body;
    const {id} = req.params;

    const query = 'CALL empleadoAddOrEdit(?,?,?,?);'
    mysqlConnection.query(query, [id, name, lastName, salary], (err,rows,fields) =>{
        if (!err) {
            res.json({status:'Employeed Edited'});
        }else{
            console.log(err);
        }
    })

});

//METHOD DELETE

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows,fields)=>{
        if (!err) {
            res.json({status:'Employeed Deleted'})
        }else{
            console.log(err);
        }
    })
})

module.exports = router;