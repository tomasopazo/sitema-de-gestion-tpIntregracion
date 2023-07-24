const estudiantesCursos_models = require('../models/estudiantesCursosMod');

// Controller to get all students and their courses
exports.getEstudiantesCursos = async (req, res) => {
    try {
      const results = await estudiantesCursos_models.obtenerEstudiantesCursos();
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los cursos y estudiantes.' });
    }
  };
  

// Controller to get a specific student by ID
exports.getEstudiantePorId = async (req, res) => {
    try {
      const idEstudiante = req.params.id; // Assuming the ID is provided in the URL parameter 'id'
      const results = await estudiantesCursos_models.obtenerEstudiantePorId(idEstudiante);
  
      if (results.length === 0) {
        res.status(404).json({ error: 'Estudiante no encontrado.' });
      } else {
        res.json(results[0]);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el estudiante' });
    }
  };
  

// Controller to get a specific course by ID
exports.getCursoPorId = async (req, res) => {
    try {
      const idCurso = req.params.id; // Assuming the ID is provided in the URL parameter 'id'
      const results = await estudiantesCursos_models.obtenerCursoPorId(idCurso);
  
      if (results.length === 0) {
        res.status(404).json({ error: 'Curso no encontrado' });
      } else {
        res.json(results[0]);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al mostrar el curso' });
    }
  };
  
  
  




// Cambiar estudiante de curso controller
// exports.cambiarEstudianteDeCurso = async (req, res) => {
//     const idEstudianteCurso = req.params.id_estudiante;
//     const nuevoCursoId = req.params.id_curso;
  
//     try {
//       // Check if the estudianteCurso exists
//       const existeEstudianteCurso = await verificarExistenciaEstudiante(idEstudiante);
//       if (!existeEstudianteCurso) {
//         return res.status(404).json({ error: 'Estudiante de curso no encontrado' });
//       }
  
//       // Attempt to update the estudianteCurso with the new curso_id
//       await estudiantesCursos_models.cambiarEstudianteDeCurso(idEstudianteCurso, nuevoCursoId);
//       res.json({ mensaje: 'Estudiante de curso cambiado exitosamente' });
//     } catch (error) {
//       res.status(500).json({ error: 'Ocurrió un error al actualizar el curso del estudiante' });
//     }
//   };
  
  
// Eliminar estudiante de un curso controllers
exports.eliminarEstudianteDe1Curso = async (req, res) => {
  const idEstudiante = req.params.idEstudiante;
  const idCurso= req.params.idCursos;
  
    try {
      const estudianteCurso = await estudiantesCursos_models.eliminarEstudianteDeCurso(idCurso, idEstudiante);
      if (estudianteCurso.length<1) {
        res.status(200).json({ mensaje: 'Estudiante de curso eliminado exitosamente' });
      } else {
        res.status(404).json({ error: 'Estudiante de curso no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error al eliminar el estudiante de curso' });
    }
  };

//agregar estudiante a un curso
exports.agregarEstudianteAlCurso = async (req, res) => {

    const { idEstudiante, idCurso } = req.body;

    try {
        const curso = await estudiantesCursos_models.agregarEstudianteAlCurso(idCurso, idEstudiante);
        
        if (curso.length<1) {
            res.status(404).json({
                success: false,
                msg: 'Estudiante o curso no encontrado'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'Estudiante agregado correctamente al curso'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrio un error al querer agregar un estudiante al curso'
        })
    }
};

// exports.cambiarEstudianteDeCurso = async (req, res) => {
//   const idEstudiante = req.params.idEstudiante;
//   const idNuevoCurso = req.body.idNuevoCurso;

//   try {
//     // Llama a la función del modelo para cambiar al estudiante de curso
//     const resultado = await estudiantesCursos_models.cambiarEstudianteDeCurso(idEstudiante, idNuevoCurso);
//       if (resultado.length<1) {
//         res.status(200).json({ mensaje: 'El estudiante ha sido cambiado de curso correctamente' });
//       } else {
//         res.status(404).json({ error: 'El estudiante NO ha sido cambiado de curso correctamente' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Ocurrió un error al cambiar el estudiante de curso' });
//     }
// };