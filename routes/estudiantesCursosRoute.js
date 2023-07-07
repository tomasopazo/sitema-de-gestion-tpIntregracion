const express = require('express');
const router = express.Router();
const estudiantes_cursosControllers = require('../controllers/estudiantesCursosCont');


//las rutas q de la tabla estudiantes_cursos 
router.get('/estudiantes_de_un_curso/:id', estudiantes_cursosControllers.mostrarLosEstDeUnCurso);
// router.get('/cursos_de_un_estudiante/:id', estudiantes_cursosControllers.mostrarCursosDeUnEstudiante);
router.get('/showAll', estudiantes_cursosControllers.mostrarEstudiantesdeTodosLosCursos);
router.post('/:id', estudiantes_cursosControllers.agregarEstudianteAlCurso);

router.delete('/curso/:id/estudiante/:idEstudiante', estudiantes_cursosControllers.eliminarEstudianteDelCurso);

module.exports = router;
