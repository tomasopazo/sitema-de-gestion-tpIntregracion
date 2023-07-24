const express = require('express');
const router= express.Router();
const estudiantesCursosController = require('./../controllers/estudiantesCursosCont');

// obtiene todos los cursos y estudiantes
router.get('/all', estudiantesCursosController.getEstudiantesCursos);

// ruta para buscar un estudiante por ID
router.get('/estudiantes/:id', estudiantesCursosController.getEstudiantePorId);

// ruta para buscar un curso por ID
router.get('/cursos/:id', estudiantesCursosController.getCursoPorId);

//estos dos no funcionan
router.post('/agregar', estudiantesCursosController.agregarEstudianteAlCurso);
// router.put('/cambiar-estudiante/:id', estudiantesCursosController.cambiarEstudianteDeCurso);
router.delete('/delete/estudiante/:id', estudiantesCursosController.eliminarEstudianteDe1Curso);


module.exports=router;