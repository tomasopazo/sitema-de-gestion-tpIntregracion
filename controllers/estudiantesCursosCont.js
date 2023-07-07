const estudiantesCursosModels = require('../models/estudiantesCursosMod');

//creamos una funcion para mostrar a los estudiantes de un curso

//GET CURSO POR ID
exports.mostrarLosEstDeUnCurso = async (req, res) => {
    const idCurso = req.params.id;

    try {

        const curso = await estudiantesCursosModels.mostrarLosEstDeUnCurso(idCurso);
        if (curso == 0) {
            res.status(404).json({
                success: false,
                msg: 'No se encontraron estudiantes que asistan a ese curso'
            })
        }

        //mostramos q todo salio bien
        res.status(200).json({
            success: true,
            msg: `El curso ${idCurso} tiene a estos estudiantes`,
            curso
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrió un error al obtener a los estudiantes del curso.'
        })
    }
};



//CREATE//ADD//POST ESTUDIANTE A UN CURSO EN PARTICULAR
//creamos una funcion para añadir un estudiante a un curso
exports.agregarEstudianteAlCurso = async (req, res) => {
    const idCurso = req.params.id;

    const { idEstudiante } = req.body;

    try {
        const curso = await estudiantesCursosModels.agregarEstudianteAlCurso(idEstudiante, idCurso);
        
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

  exports.mostrarEstudiantesdeTodosLosCursos = async (req, res) => {
    const idCurso = req.params.idCurso;
    const idEstudiante= req.params.idEstudiante;
  
    try {

    const todosLosEyC = await estudiantesCursosModels.mostrarEstudiantesdeTodosLosCursos(idEstudiante, idCurso);  
  
    if (todosLosEyC.length<1) {
        res.status(404).json({
            success: false,
            msg: 'no se obtuvieron los cursos y estudiantes'
        })
    }

    res.status(200).json({
        success: true,
        msg: 'Estudiante y cursos a la vista'
    })
} catch (error) {
    res.status(500).json({
        success: false,
        msg: 'Ocurrio un error al querer mostrar estudiantes y cursos'
    })
}
};

  
//DELETE/BORRAR ESTUDIANTE DE UN CURSO 
//creamos una funcion para eliminar un estudiante de un curso
exports.eliminarEstudianteDelCurso = async (req, res) => {
    const idCurso = req.params.id;
    const idEstudiante = req.params.idEstudiante;

    try {
        const curso = await estudiantesCursosModels.eliminarEstudianteDelCurso(idEstudiante, idCurso);

        if (curso.length<1) {
            res.status(400).json({
                success: false,
                msg:'No se encontró al estudiante o al curso'
            })
        }

        res.status(200).json({
            success: true,
            msg: 'Estudiante eliminado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Ocurrio un rrror al querer eliminar a un estudiante'
        })
    }
};