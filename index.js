//CREACION DEL METODO POST
function GuardarDataEst() {
    // Obtiene los valores de los campos de entrada
    let datos= {
     nombre : document.getElementById('nombre').value,
     edad : document.getElementById('edad').value,
     grado : document.getElementById('grado').value
    };
    // Realiza la solicitud POST utilizando fetch
    fetch('http://localhost:3000/api/estudiantes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(res=>{
        GuardarData();
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Datos guardados correctamente');
      } else {
        console.log('Error al guardar los datos');
      }
    })
    .catch(function(error) {
      console.log('Error de conexión:', error);
    });    
};

//CREACION DEL METODO POST
function GuardarDataProf() {
  // Obtiene los valores de los campos de entrada
  let datos= {
   nombre : document.getElementById('nombre').value,
   especialidad : document.getElementById('especialidad').value,
   email : document.getElementById('especialidad').value
  };
  // Realiza la solicitud POST utilizando fetch
  fetch('http://localhost:3000/api/profesores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(res=>{
      GuardarData();
  })
  .then(function(response) {
    if (response.ok) {
      console.log('Datos guardados correctamente');
    } else {
      console.log('Error al guardar los datos');
    }
  })
  .catch(function(error) {
    console.log('Error de conexión:', error);
  });    
};






//CREACION DEL METODO POST
function GuardarDataCursos() {
  // Obtiene los valores de los campos de entrada
  let datos= {
   nombre : document.getElementById('nombre').value,
   descripcion : document.getElementById('descripcion').value
  };
  // Realiza la solicitud POST utilizando fetch
  fetch('http://localhost:3000/api/cursos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(res=>{
      GuardarData();
  })
  .then(function(response) {
    if (response.ok) {
      console.log('Datos guardados correctamente');
    } else {
      console.log('Error al guardar los datos');
    }
  })
  .catch(function(error) {
    console.log('Error de conexión:', error);
  });    
};









//CREACION DEL METODO DELETE

function EliminarData(eId) {
  fetch('http://localhost:3000/api/estudiantes' +eId,{method:'DELETE'}).then(res=>{
    console.log(res);
    
  }) 
};
