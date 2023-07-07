const db = require('../config/db');

exports.obtenerCursos = async () => {
  const [rows, fields] = await db.execute('SELECT * FROM cursos');
  console.log(rows);
  return rows;
};

exports.obtenerCursosPorId = async (id) => {
  const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE id=?', [id]);
  console.log(rows);
  return rows;
};

exports.agregarCurso = async (curso) => {
  const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)', [curso.nombre, curso.descripcion]);
  return rows;
};

exports.actualizarCurso = async (curso) => {
  const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [curso.nombre, curso.descripcion, curso.idCurso]);
  return rows;
};

exports.eliminarCursoPorId = async (id) => {
  const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?', [id]);
  return rows;
};
