const express = require('express');
const router = express.Router();
const cursosController = require('./../controllers/cursosControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');

//////////////////////////////////// RUTA PARA MOSTRAR TODOS LOS CURSOS ////////////////////////////////////
router.get('/', cursosController.obtenerCursos);

//////////////////////////////// RUTA PARA MOSTRAR UN CURSO POR IDENTIFICADOR ///////////////////////////////
router.get('/:id', cursosController.obtenerCursosPorId);

//////////////////////////////////// RUTA PARA AGREGAR UN NUEVO CURSO ///////////////////////////////////////
router.post('/',
[
    check("nombre", "El nombre del curso es obligatorio").not().isEmpty().isString().trim(),
    check("descripcion", "La descripcion puede pasar desapercibida, si no estamos seguros de la descripcion ").isString(),
    validarCampos
], cursosController.agregarCurso);

//////////////////////////// RUTA PARA ACTUALIZAR CURSO POR IDENTIFICADOR UNICO /////////////////////////////
router.put('/:id',
[
    check("nombre", "El nombre del curso es obligatorio").not().isEmpty().isString().trim(),
    check("descripcion", "La descripcion puede pasar desapercibida, si no estamos seguros de la descripcion ").isString(),
    validarCampos
],cursosController.actualizarCurso);

///////////////////////////// RUTA PARA ELIMINAR CURSO POR IDENTIFICADOR UNICO /////////////////////////////
router.delete('/:id', cursosController.eliminarCursoPorId);

module.exports = router;
