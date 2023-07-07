const db = require('../config/db');
//obtenemos todos los profesores

exports.obtenerProfesores = async () =>{
    const [rows,fields] = await db.execute ("SELECT * FROM profesores");
    console.log (rows);
    return rows;
}
//obtenemos un  profesor por su id
exports.obtenerProfesoresPorId = async(id)=>{
const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id=?',[id]);
console.log(rows)
return rows;
}

//agregamos un  profesor a la lista 
exports.agregarProfesor = async (profesor) => {
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, email) VALUES (?, ?, ?)', [profesor.nombre, profesor.especialidad, profesor.email])
    return rows;
};


 //actualizamos datos de un profesor
exports.actualizarProfesor = async (profesor) => {
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [profesor.nombre, profesor.especialidad, profesor.email, profesor.idProfesor])
    return rows;
};


//eliminamos un  profesor
exports.deleteProfesor = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id =?', [id])
    return rows;
};