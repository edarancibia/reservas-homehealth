var router = require('express').Router();
const connection = require('../database/connection');
const sql = require('../database/queries/paciente');

router.get('/:rutpac', (req,res) => {
    connection.query(sql.get(req.params.rutpac), (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({pac: result});
        }
    });
});

router.post('/save', (req, res) => {

    var data = {
        nombre: req.body.nombre,
        a_pat: req.body.a_pat,
        a_mat: req.body.a_mat,
        rut_num: req.body.rut_num,
        rut_dig: req.body.rut_dig,
        telefono: req.body.telefono,
        email: req.body.email
    }

    console.log(data);
    connection.query(sql.add(data), (err, result, next) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json(data);
            console.log('datos guardados');
        }
    });
});

module.exports = router;