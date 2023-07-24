const express = require ('express')
const router = express.Router();
const profesoresController = require('./../controllers/profesoresControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');

//////////////////////////////////// RUTA PARA MOSTRAR TODOS LOS PROFESORES  ////////////////////////////////////
router.get('/', profesoresController.obtenerProfesores);

//////////////////////////////// RUTA PARA MOSTRAR UN PROFESOR POR IDENTIFICADOR ///////////////////////////////
router.get('/:id', profesoresController.obtenerProfesoresPorId);

//////////////////////////////////// RUTA PARA AGREGAR UN NUEVO PROFESOR ///////////////////////////////////////
router.post('/',
    [
    check('nombre', 'El nombre del profesor es obligatorio').not().isEmpty().isString().trim(),
    check('especialidad','La especialidad del profesor es obligatoria').not().isEmpty().isString().trim(),
    check('email').trim().isEmail(),
    validarCampos
    ],profesoresController.agregarProfesor);

//////////////////////////// RUTA PARA ACTUALIZAR PROFESOR POR IDENTIFICADOR UNICO /////////////////////////////
router.put('/:id', 
    [   
    check('nombre', 'El nombre del profesor tiene q ser ingresado de forma correcta').not().isEmpty().isString().trim(),
    check('especialidad', 'La especialidad del profesor es obligatoria').not().isEmpty().isString().trim(),
    check('email', 'El email del profesor es obligatorio').isEmail().trim(),
    validarCampos
    ],profesoresController.actualizarProfesor);

///////////////////////////// RUTA PARA ELIMINAR PROFESOR POR IDENTIFICADOR UNICO /////////////////////////////
router.delete('/:id', profesoresController.eliminarProfesorPorId);


module.exports = router;