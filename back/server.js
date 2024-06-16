const express = require('express')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extends:false}))
app.use(express.json());

app.use(cors());

dotenv.config({path: './.env'})

app.use('/', require('./rutas/rutas'))

const conexion = require('./database/db')

app.listen(8000, (req, res)=>{
    console.log('servidor corriendo en el puerto 8000')
})
