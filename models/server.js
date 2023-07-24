const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const estudiante = require ("./../routes/estudiantesRoute");
const profesor = require ('../routes/profesoresRoute');
const curso = require ('../routes/cursosRoute');
const bcryptjs = require('bcryptjs');
const estudiantesCursos= require ('../routes/estudiantesCursosRoute');

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    routes(){
        this.app.use('/api/estudiantes',estudiante);
        this.app.use('/api/profesores', profesor);
        this.app.use('/api/cursos', curso);
        this.app.use('/api/estudiantesCursos',estudiantesCursos);

//encriptacion de contraseña mediante el uso de bcryptjs
        this.app.post('/login', async (req, res) => {
        const user = req.body.user;
        const password = req.body.password;
        // Verificar las credenciales sin hashear
        if (user === 'admin' && password === '12345') {
            try {
            // Generar el hash de la contraseña
                let passwordHash = await bcryptjs.hash(password, 8);
                res.json({
                message: 'AUTENTICACIÓN EXITOSA!',
                passwordHash: passwordHash
                });
            } catch (error) {
            res.status(500).json({ message: 'Error al generar el hash de la contraseña' });
            }
            } else {
            res.json({ message: 'INGRESE CORRECTAMENTE SUS CREDENCIALES' });
        }
    });
    }   

    listen() {
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }}

module.exports = Server;
