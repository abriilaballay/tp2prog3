const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

//procedimiento para registrarnos
exports.register = async (req, res)=>{    
    try {
        const data = req.body
        let passHash = await bcryptjs.hash(data.password,8)    
        console.log(passHash) 
        conexion.query('INSERT INTO usuarios SET ?', {gmail:data.gmail , nombreUsuario:data.nombreUsuario, password:passHash}, (error, results)=>{
            if (error) {
                console.log(error);
                res.status(400).json({ message: 'Error al registrar usuario' });
            } else {
                // Envía la URL de destino como parte de la respuesta
                res.status(200).json({ message: 'Usuario registrado exitosamente', });
            }
        })
    } catch (error) {
        console.log(error)
    }       
}
exports.login = async (req,res) => {
    try{
        const data = req.body
        let passHash = await bcryptjs.hash(data.password,8)
        if (data.gmail && data.password) {
            conexion.query ('select * from usuarios where gmail = ?', [data.gmail], async (error , resultado ) =>{
                if (error) {
                    console.error('Error en la consulta a la base de datos:', error);
                    return res.status(500).send('Error interno del servidor');
                }
                if (resultado.length == 0 || !( await bcryptjs.compare(data.password, resultado[0].password))) {
                console.log('usurio no encontrado ')
                } else {
                    console.log('usuario encontrado')
                    res.status(200).json({ message: 'Inicio de sesión exitoso' });
                }
            } )
        } else {
            console.log('datos invalidos ')
        }
    }    
    catch (error) {
        console.log(error)
    }
}

