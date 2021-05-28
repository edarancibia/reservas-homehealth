var router = require('express').Router();
const connection = require('../database/connection');
const sql = require('../database/queries/bloques');
const { route } = require('./paciente');

router.get('/', (req, res) => {
    res.render('templates/index', {data: ''});
});

router.get('/step2', (req, res) => {
    res.render('templates/especialidad', {data: ''});
});

router.get('/calendar', (req, res) => {
    res.render('templates/calendar', {data: ''});
});

router.get('/step4', (req, res) => {
    res.render('templates/datos-per');
});

router.get('/step4v2', (req, res) => {
    res.render('templates/datos-per2');
});

router.get('/step5', (req, res) => {
    res.render('templates/step5');
});

router.get('/ok', (req, res) => {
    res.render('templates/ok');
});

router.get('/:idbloque', (req, res) => {
    //res.render('templates/calendar', {data: ''});
    connection.query(sql.get(req.params.idbloque), (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.status(200).json({bloques: result});
        }
    });
});


router.get('/list/:fecha/:idusuario', (req, res) => {
    connection.query(sql.listar(req.params.fecha, req.params.idusuario), (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.status(200).json({bloques: result});
        }
    })
    
});

router.get('/profs/:role', (req, res) => {
    connection.query(sql.profesionales(req.params.role), (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({profs: result});
        }
    });
});

router.get('/prof/:idprof', (req, res) => {
    connection.query(sql.profesional(req.params.idprof), (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json({prof: result});
        }
    });
})

router.post('/save/:id', (req, res) => {
    var data = {
        idbloque  : req.params.id,
        modified  : new Date(),
        rutpac    : req.body.rutpac,
        estado    : 1
    }

    console.log(data);

    connection.query(sql.add(data), (err, result,next) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).json(data);
            console.log('datos guardados');
        }
    });
});

router.post('/edit/:id', (req, res) => {
    
});


module.exports = router;