const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiantesControllers');
// const { validarCampos } = require('../middlewares/validar_campos');
// const { check } = require('express-validator');

router.get('/', estudianteController.obtenerEstudiantes);

router.get('/:id', estudianteController.obtenerEstudiantesPorId);

router.delete('/:id', estudianteController.eliminarEstudiantePorId);

router.post('/',estudianteController.agregarEstudiante);

router.put('/:id',estudianteController.actualizarEstudiante);


module.exports= router;