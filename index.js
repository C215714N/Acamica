const express   = require('express');
const exphbs    = require('express-handlebars');
const session   = require('express-session');
const store     = require('express-mysql-session');
const morgan    = require('morgan');
const path      = require('path');
const passport  = require('passport');
const flash     = require('connect-flash');

const app = express();
const { database } = require('./src/controllers/mysql');
console.log(database);
require('./src/controllers/users');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//middlewares
app.use(session({
    secret: 'delilahnodesession',
    resave: false,
    saveUninitialized: false,
    store: new store(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// variables globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
})

//routes
app.use(require('./src/models'));
app.use(require('./src/models/authentication'));
app.use('/admin', require('./src/models/links'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
