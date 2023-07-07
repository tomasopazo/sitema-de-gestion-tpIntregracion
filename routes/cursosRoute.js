const express = require('express');
const router = express.Router();
const cursosController = require('./../controllers/cursosControllers');

//////////////////////////////////// RUTA PARA MOSTRAR TODOS LOS CURSOS ////////////////////////////////////
router.get('/', cursosController.obtenerCursos);

//////////////////////////////// RUTA PARA MOSTRAR UN CURSO POR IDENTIFICADOR ///////////////////////////////
router.get('/:id', cursosController.obtenerCursosPorId);

//////////////////////////////////// RUTA PARA AGREGAR UN NUEVO CURSO ///////////////////////////////////////
router.post('/',cursosController.agregarCurso);

//////////////////////////// RUTA PARA ACTUALIZAR CURSO POR IDENTIFICADOR UNICO /////////////////////////////
router.put('/:id',cursosController.actualizarCurso);

///////////////////////////// RUTA PARA ELIMINAR CURSO POR IDENTIFICADOR UNICO /////////////////////////////
router.delete('/:id', cursosController.eliminarCursoPorId);

module.exports = router;
