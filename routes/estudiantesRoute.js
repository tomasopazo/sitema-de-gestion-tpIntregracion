const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiantesControllers');
const { validarCampos } = require('../middlewares/validar_campos');
const { check } = require('express-validator');

router.get('/', estudianteController.obtenerEstudiantes);

router.get('/:id', estudianteController.obtenerEstudiantesPorId);

router.delete('/:id', estudianteController.eliminarEstudiantePorId);

router.post('/',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().isString().trim(),
    check('edad', 'La edad es obligatoria').not().isEmpty().isInt().trim(),
    check('grado', 'El grado es obligatorio').not().isEmpty().trim(),
    validarCampos
    ],estudianteController.agregarEstudiante);

router.put('/:id',
    [
    check('nombre', 'El nombre es obligatorio').not().isEmpty().isString().trim(),
    check('edad', 'La edad es obligatoria').not().isEmpty().isInt().trim(),
    check('grado', 'El grado es obligatorio').not().isEmpty().trim(),
    validarCampos
    ],estudianteController.actualizarEstudiante);


module.exports= router;