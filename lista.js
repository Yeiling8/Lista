
// Crear un arreglo para almacenar las tareas
var tareas = [];

// Función para mostrar la ventana de alerta y añadir tareas
function agregarTarea() {
  var tarea = prompt("Ingrese una tarea:");

  // Validar si se ingresó una tarea
  if (tarea !== null && tarea !== "") {
    tareas.push(tarea); // Agregar la tarea al arreglo

    // Actualizar la lista de tareas en la ventana
    actualizarListaTareas();
  }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
  tareas.splice(index, 1); // Eliminar la tarea del arreglo

  // Actualizar la lista de tareas en la ventana
  actualizarListaTareas();
}

// Función para actualizar la lista de tareas en la ventana
function actualizarListaTareas() {
  var lista = document.getElementById("lista-tareas");
  lista.innerHTML = ""; // Limpiar la lista

  // Recorrer el arreglo de tareas y crear elementos de lista
  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i];

    // Crear un elemento de lista
    var li = document.createElement("li");
    li.textContent = tarea;

    // Crear un botón para eliminar la tarea
    var btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "❌";
    btnEliminar.setAttribute("onclick", "eliminarTarea(" + i + ")");

    // Agregar el botón de eliminar a la tarea
    li.appendChild(btnEliminar);

    // Agregar la tarea a la lista
    lista.appendChild(li);
  }
}

// Función para cerrar la ventana
function cerrarVentana() {
  document.getElementById("ventana").style.display = "none";
}

  
