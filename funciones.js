let formulario = document.getElementById("formulario");
let tarea = document.getElementById("agregarTarea");
let boton = document.getElementById("btn");
let prioridad = document.getElementById("prioridadTareas");
let lista = document.getElementById("lista");



boton.addEventListener("click", agregarTarea);

prioridad.addEventListener('onchange',cambiarPrioridad);


tareas.value= '';

function agregarTarea(){

    let tareas = tarea.value;
    let añadirTarea = document.createElement("li");
    let enlaces = document.createElement("a");


    let contenido = document.createTextNode(tareas);

    if(tareas == ''){
        alert("Escribe una tarea valida,por favor");
        return false;
    }

    cambiarPrioridad();



    enlaces.appendChild(contenido);
    enlaces.setAttribute('href','#');
    añadirTarea.appendChild(enlaces);

    lista.appendChild(añadirTarea);

    for(let i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener('click', function(){
            this.parentNode.removeChild(this);
        });
    }

}
for(let i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
}

 function cambiarPrioridad(){
    switch (prioridad.value){
        case (prioridad.value == "urgente"):
            contenido.style.backgroundColor="red";
            break;
        case (prioridad.value == "rutina"):
            contenido.style.backgroundColor="indigo";
            break;
        case (prioridad.value == 'diario'):
            contenido.style.backgroundColor="green";
            break;
        case (prioridad.value == "seleccionaPrioridad"):
            alert("Selecciona una prioridad");
            break;
    }
 }

/* function comprobarInput() {
    añadirTarea.className = '';
    añadirTarea.setAttribute('placeholder', 'Agrega tu tarea');

} */

function eliminarTarea() {
    this.parentNode.removeChild(this);

}