const cursosModel = require('../models/cursosModels');

exports.obtenerCursos = async (req, res) => {
  try {
    const cursos = await cursosModel.obtenerCursos();
    res.status(200).json({
      success: true,
      data: cursos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error al obtener los datos de los cursos'
    });
  }
};

exports.obtenerCursosPorId = async (req, res) => {
  const idCurso = req.params.id;
  try {
    const curso = await cursosModel.obtenerCursosPorId(idCurso);
    if (curso.length < 1) {
      res.status(404).json({
        success: false,
        msg: `No existe el curso con el id: ${idCurso}`
      });
    }
    res.status(200).json({
      success: true,
      curso
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error al obtener los datos del curso'
    });
  }
};

exports.agregarCurso = async (req, res) => {
  const curso = req.body;
  try {
    const cursoData = await cursosModel.agregarCurso(curso);
    if (cursoData.length < 1) {
      res.status(406).json({
        success: false,
        msg: 'No se puede agregar el curso'
      });
    }
    res.status(200).json({
      success: true,
      msg: 'El curso fue agregado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: 'No se pudo cargar el curso correctamente'
    });
  }
};

exports.eliminarCursoPorId = async (req, res) => {
  const idCurso = req.params.id;
  try {
    const eliminar = await cursosModel.eliminarCursoPorId(idCurso);
    if (eliminar.affectedRows === 0) {
      res.status(404).json({
        success: false,
        msg: 'No se pudo eliminar el curso'
      });
    } else {
      res.status(200).json({
        success: true,
        msg: '¡Curso eliminado!'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Hubo un error al eliminar el curso'
    });
  }
};

exports.actualizarCurso = async (req, res) => {
  const cursoActualizado = req.body;
  const idCurso = req.params.id;
  const curso = {
    idCurso,
    ...cursoActualizado
  };
  console.log(curso);
  try {
    const listaActualizada = await cursosModel.actualizarCurso(curso);
    if (listaActualizada < 1) {
      res.status(404).json({
        success: false,
        msg: '¡Datos del curso no actualizados!'
      });
    }
    res.status(200).json({
      success: true,
      msg: '¡Lista Actualizada!',
      lista: listaActualizada
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Hubo un error al obtener los datos del curso'
    });
  }
};
