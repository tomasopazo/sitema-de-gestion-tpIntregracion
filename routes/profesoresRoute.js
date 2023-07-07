const express = require ('express')
const router = express.Router();
const profesoresController = require('./../controllers/profesoresControllers');

//////////////////////////////////// RUTA PARA MOSTRAR TODOS LOS PROFESORES  ////////////////////////////////////
router.get('/', profesoresController.obtenerProfesores);

//////////////////////////////// RUTA PARA MOSTRAR UN PROFESOR POR IDENTIFICADOR ///////////////////////////////
router.get('/:id', profesoresController.obtenerProfesoresPorId);

//////////////////////////////////// RUTA PARA AGREGAR UN NUEVO PROFESOR ///////////////////////////////////////
router.post('/',profesoresController.agregarProfesor);

//////////////////////////// RUTA PARA ACTUALIZAR PROFESOR POR IDENTIFICADOR UNICO /////////////////////////////
router.put('/:id', profesoresController.actualizarProfesor);

///////////////////////////// RUTA PARA ELIMINAR PROFESOR POR IDENTIFICADOR UNICO /////////////////////////////
router.delete('/:id', profesoresController.eliminarProfesorPorId);


module.exports = router;