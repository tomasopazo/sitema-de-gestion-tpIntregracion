const profesorModel = require('../models/profesoresModel');

exports.obtenerProfesores = async (req, res)=>{
    try {
        const profesores = await profesorModel.obtenerProfesores();
        res.status(200).json({
            success:true,
            data:profesores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos de los Profesor'
        })
    }
}


exports.obtenerProfesoresPorId = async(req, res)=>{
    const idProfesor = req.params.id;
    try {
        const profesores = await profesorModel.obtenerProfesoresPorId(idProfesor)
        if(profesores.length<1){ 
            res.status(404).json({
                success:false,
                mgs:`No existe el Profesor con el id: ${idProfesor}`
            })
        }
        res.status(200).json({
            success:true,
            profesores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos del Profesor'
        })
    }
}


exports.agregarProfesor = async (req, res) => {
    //creamos una variable q va almacenar la informacion q vamos a pasarle a la peticion
    const profesor = req.body;
    try {
        //esta variable es la q va almacenar la informacion usada anteriomente
        const profesorData = await profesorModel.agregarProfesor(profesor);

        //probamos q devuelva algo la variable profesor creada anteriormente
        if (profesorData.length<1) {
            res.status(406).json({
                success: false,
                msg: 'No se puede agregar al Profesor'
            });
        }

        res.status(200).json({
            success: true,
            msg: 'El Profesor fue agregado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'No se pudo cargar al Profesor correctamente'
        });
    }
};

  exports.eliminarProfesorPorId = async (req, res) => {
    const idProfesor = req.params.id;
    try {
      const eliminar = await profesorModel.deleteProfesor(idProfesor);
      if (eliminar.affectedRows === 0) {
        res.status(404).json({
          success: false,
          msg: '¡No se pudo eliminar el Profesor'
        });
      } else {
        res.status(200).json({
          success: true,
          msg: 'Profesor eliminado!'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Hubo un error al eliminar el Profesor'
      });
    }
  };

    
    exports.actualizarProfesor = async (req, res) => {
        const profesorActualizado = req.body;
        const idProfesor = req.params.id;
        const profesor = {
            idProfesor,
          ...profesorActualizado
        };
        console.log(profesor);
        try {
          const listaActualizada = await profesorModel.actualizarProfesor(profesor);
          if (listaActualizada < 1) {
            res.status(404).json({
              success: false,
              msg: '¡Datos de Profesor no actualizados!'
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
            message: 'Hubo un error al obtener los datos del Profesor'
          });
        }
      };
    