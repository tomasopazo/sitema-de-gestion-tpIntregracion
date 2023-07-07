const db = require('../config/db');


exports.mostrarCursosDeUnEstudiante = async (idEstudiante) => {
    const [rows, fields] = await db.execute(
        'SELECT curso.nombre, curso.descripcion FROM cursos c INNER JOIN estudiantes_cursos ec ON c.id = ec.curso_id WHERE ec.estudiante_id = ?', [idEstudiante])
        return rows
};



//mostrar los estudiantes de un curso
exports.mostrarLosEstDeUnCurso = async (idCurso) => {
    const [rows, fields] = await db.execute(
        'SELECT e.nombre, e.edad, e.grado FROM estudiantes e INNER JOIN estudiantes_cursos ec ON e.id = ec.estudiante_id WHERE ec.curso_id = ?', [idCurso])
        return rows
};


exports.mostrarEstudiantesdeTodosLosCursos = async (idCurso) => {
    const query = `SELECT estudiantes.nombre, estudiantes.edad, estudiantes.grado 
      FROM estudiantes 
      INNER JOIN estudiantes_cursos ON estudiantes.id = estudiantes_cursos.estudiante_id 
      WHERE estudiantes_cursos.curso_id = ?`;
  
    const [rows, fields] = await db.execute(query, [idCurso]);
    return rows;
  };
  


exports.agregarEstudianteAlCurso = async (idEstudiante, idCurso) => {
    const query = 'INSERT INTO estudiantes_cursos (estudiante_id, curso_id) VALUES (?, ?)';
    const [rows, fields] = await db.execute(query, [idEstudiante, idCurso]);
    return rows;
  };

exports.eliminarEstudianteDelCurso = async (idEstudiante, idCurso) => {
    const [rows, fields] = await db.execute(
        'DELETE FROM estudiantes_cursos WHERE estudiante_id = ? and curso_id = ?', [idEstudiante, idCurso])
    return rows
};