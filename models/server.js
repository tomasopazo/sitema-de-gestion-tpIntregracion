const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const estudiante = require ("./../routes/estudiantesRoute");
const profesor = require ('../routes/profesoresRoute');
const curso = require ('../routes/cursosRoute');
const estudiantesCursos= require ('../routes/estudiantesCursosRoute');

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    routes(){
        this.app.use('/api/estudiantes',estudiante);
        this.app.use('/api/profesores', profesor);
        this.app.use('/api/cursos', curso);
        this.app.use('/api/estudiantesCursos',estudiantesCursos);
    }
    listen(){
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }
}
module.exports = Server;

