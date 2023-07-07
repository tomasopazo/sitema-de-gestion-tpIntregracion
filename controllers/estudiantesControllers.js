const estudianteModel = require('../models/estudiantesModels');

exports.obtenerEstudiantes = async (req, res)=>{
    try {
        const estudiantes = await estudianteModel.obtenerEstudiantes();
        res.status(200).json({
            success:true,
            data:estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos de los estudiantes'
        })
    }
}


exports.obtenerEstudiantesPorId = async(req, res)=>{
    const idEstudiante = req.params.id;
    try {
        const estudiantes = await estudianteModel.obtenerEstudiantesPorId(idEstudiante)
        if(estudiantes.length<1){ 
            res.status(404).json({
                success:false,
                mgs:`No existe el estudiante con el id: ${idEstudiante}`
            })
        }
        res.status(200).json({
            success:true,
            estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos del estudiante'
        })
    }
}


exports.agregarEstudiante = async (req, res) => {
    //creamos una variable q va almacenar la informacion q vamos a pasarle a la peticion
    const estudiante = req.body;
    try {
        //esta variable es la q va almacenar la informacion usada anteriomente
        const estudianteData = await estudianteModel.agregarEstudiante(estudiante);

        //probamos q devuelva algo la variable estudiante creada anteriormente
        if (estudianteData.length<1) {
            res.status(406).json({
                success: false,
                msg: 'No se puede agregar al estudiante'
            });
        }

        res.status(200).json({
            success: true,
            msg: 'El estudiante fue agregado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'No se pudo cargar al estudiante correctamente'
        });
    }
};

  exports.eliminarEstudiantePorId = async (req, res) => {
    const idEstudiante = req.params.id;
    try {
      const eliminar = await estudianteModel.deleteEstudiante(idEstudiante);
      if (eliminar.affectedRows === 0) {
        res.status(404).json({
          success: false,
          msg: '¡No se pudo eliminar el estudiante'
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'estudiante eliminado!'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Hubo un error al eliminar el estudiante'
      });
    }
  };

    
    exports.actualizarEstudiante = async (req, res) => {
        const estudianteActualizado = req.body;
        const idEstudiante = req.params.id;
        const estudiante = {
            idEstudiante,
          ...estudianteActualizado
        };
        console.log(estudiante);
        try {
          const listaActualizada = await estudianteModel.actualizarEstudiante(estudiante);
          if (listaActualizada < 1) {
            res.status(404).json({
              success: false,
              msg: '¡Datos de estudiante no actualizados!'
            });
          }
          // Obtener la lista actualizada de la base de datos
          res.status(200).json({
            success: true,
            msg: '¡Lista Actualizada!',
            lista: listaActualizada // Agregar la lista actualizada en la respuesta
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos del estudiante'
          });
        }
      };
    