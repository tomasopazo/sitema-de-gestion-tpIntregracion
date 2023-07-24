const db = require('../config/dbcursos');

//otener estudiantes y cursos
exports.obtenerEstudiantesCursos = () => {
    return new Promise((resolver, rechazar) => {
      const query = `
        SELECT estudiantes.idEst, estudiantes.nombre AS 'Nombre Estudiante', estudiantes.edad, estudiantes.grado, cursos.idCursos, cursos.nombre AS 'Nombre Curso', cursos.descripcion FROM estudiantes INNER JOIN estudiantescursos ON estudiantes.idEst = estudiantescursos.id_estudiante INNER JOIN cursos ON estudiantesCursos.id_curso = cursos.idCursos;`;
      db.query(query, (err, results) => {
        if (err) {
          return rechazar(err);
        }
        return resolver(results);
      });
    });
  };

//obtener estudiante por ID
  exports.obtenerEstudiantePorId = (idEstudiante) => {
    return new Promise((resolver, rechazar) => {
      const query = `
        SELECT estudiantes.idEst, estudiantes.nombre AS 'Nombre Estudiante', estudiantes.edad, estudiantes.grado, cursos.idCursos, cursos.nombre AS 'Nombre Curso', cursos.descripcion FROM (estudiantes INNER JOIN estudiantescursos ON estudiantes.idEst = estudiantescursos.id_estudiante) INNER JOIN cursos ON estudiantescursos.id_curso = cursos.idCursos WHERE estudiantes.idEst = ?;`;
      db.query(query, [idEstudiante], (err, results) => {
        if (err) {
          return rechazar(err);
        }
        return resolver(results);
      });
    });
  };
  //obtener curso por ID
  exports.obtenerCursoPorId = (idCursos) => {
    return new Promise((resolver, rechazar) => {
      const query = `
        SELECT estudiantes.idEst, estudiantes.nombre AS 'Nombre Estudiante', estudiantes.edad, estudiantes.grado, cursos.idCursos, cursos.nombre AS 'Nombre Curso', cursos.descripcion FROM estudiantes INNER JOIN estudiantescursos ON estudiantes.idEst = estudiantescursos.id_estudiante INNER JOIN cursos ON estudiantescursos.id_curso = cursos.idCursos WHERE cursos.idCursos = ?;`;
      db.query(query, [idCursos], (err, results) => {
        if (err) {
          return rechazar(err);
        }
        return resolver(results);
      });
    });
  };
  



// Cambiar estudiante de curso model
exports.cambiarEstudianteDeCurso = async (idNuevoCurso, idEstudiante) => {
    try {
    const [rows, fields] = await db.execute('UPDATE estudiantescursos SET id_curso = ? WHERE id_estudiante = ?', [idNuevoCurso, idEstudiante]);
    if (err) {
      return rechazar(err);
    }
    else{
      return rows;
    }
    } catch (error) {
      throw new Error('Ocurrió un error al realizar la consulta sql');
    }
  };
  

  // Eliminar estudiante de un curso models
  // exports.eliminarEstudianteDeCurso = async (idCurso,idEstudiante) => {
  //     const [rows, fields]= await db.execute('DELETE FROM estudiantescursos WHERE id_curso = ? AND id_estudiante= ?  ', [idCurso,idEstudiante]);
  //     return rows;
  // };
  

exports.agregarEstudianteAlCurso = async (idEstudiante, idCurso) => {
  try {
    const [rows, fields] = await db.execute('INSERT INTO estudiantescursos (id_estudiante, id_curso) VALUES (?, ?)', [idEstudiante, idCurso]);
    return rows;
  } catch (error) {
    throw new Error('Ocurrió un error al realizar la consulta sql ');
  }
};

exports.eliminarEstudianteDeCurso = async (idEstudiante) => {
  try {
    const [rows, fields] = await db.execute('DELETE FROM estudiantescursos WHERE id_estudiante = ?', [idEstudiante]);
    return rows;
  } catch (error) {
    throw new Error('Ocurrió un error al realizar la consulta sql '+error);
  }
};
