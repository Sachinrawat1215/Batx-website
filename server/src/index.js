const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const router = require('./Routes/route');
const Connection = require('./db/conn');
const cors = require('cors');
const dotEnv = require('dotenv');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
dotEnv.config();
app.use(cookieParser());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use('/', router);
Connection();

app.listen(PORT, () => {
    console.log(`Server is running sucessfully on port number ${PORT}`);
});