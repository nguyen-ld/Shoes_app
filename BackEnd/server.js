const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const {engine} = require('express-handlebars');
const port = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');

//set view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src\\resource\\views'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const api = require('./src/routes/api');
const database = require('./src/config/database');
app.use('/api', api);
database.connect();

app.get('/', async (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
module.exports = app;
