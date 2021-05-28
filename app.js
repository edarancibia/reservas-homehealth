var express = require('express');
var app = express();
var path = require('path');

var expressHbs = require('express-handlebars');
var bodyparser = require('body-parser');
var PORT = process.env.PORT || 3000;

//conf de handlebars como motor de vistas
/*app.engine('hbs', expressHbs({defaultLayout: 'base', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));*/

app.engine('.hbs', expressHbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

//MIDDLEWARES
app.use(bodyparser.json());
app.use(express.urlencoded({extended: true}));

//enrutadores
var calendarRouter = require('./routes/calendar');
var pacienteRouter = require('./routes/paciente');

app.use('/', calendarRouter);
app.use('/paciente', pacienteRouter);
/*var indexRouter = require('./routes/index');
var profesionalesRouter = require('./routes/profesional');
var calendarRouter = require('./routes/calendar');
app.use('/index', indexRouter);
app.use('/profesionales', profesionalesRouter);
app.use('/calendar', calendarRouter);*/
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});