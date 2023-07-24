const db = require('../config/db');

exports.obtenerEstudiantes = async () =>{
    const [rows,fields] = await db.execute ("SELECT * FROM estudiantes");
    console.log (rows);
    return rows;
}

exports.obtenerEstudiantesPorId = async(id)=>{
const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id=?',[id]);
console.log(rows)
return rows;
}

//agregamos un estudiante a la lista de usuario
exports.agregarEstudiante = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)', [estudiante.nombre, estudiante.edad, estudiante.grado])
    return rows;
};


 //actualizamos datos de un usuario
exports.actualizarEstudiante = async (estudiante) => {
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE idEst = ?', [estudiante.nombre, estudiante.edad, estudiante.grado, estudiante.idEstudiante])
    return rows;
};


//eliminamos un estudiante
exports.deleteEstudiante = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE idEst =?', [id])
    return rows;
};