const cuerpo = document.getElementById('cuerpo');
const input = document.getElementById('campoTarea');
const botonCrearTarea = document.getElementById('boton-agregar');

const botonFinalizar = [];
let contadorTareas = 0;

botonCrearTarea.addEventListener('click', (e) =>{
   agregarTarea();
});

function agregarTarea(){
    let newElement = document.createElement('div');
    const tarea = input.value;

newElement.classList.add('tarea');
newElement.id = `tarea${contadorTareas}`;
if (input.value != '') {
    
    newElement.innerHTML = `<p id="texto-tarea">${tarea}</p>
    <div class="contenedor-botones">
        <button id="botonFinalizar${contadorTareas}" class="boton boton-tarea boton-fleck"><i class="bi bi-check-circle-fill"></i></button>
        <button id="botonEliminar${contadorTareas}" class="boton boton-tarea boton-delete"><i class="bi bi-trash3-fill"></i></button>`;
cuerpo.append(newElement);
let nuevoBtnFinalizar = document.getElementById(`botonFinalizar${contadorTareas}`);
let nuevoBtnEliminar = document.getElementById(`botonEliminar${contadorTareas}`);

agregarListeners(nuevoBtnFinalizar,newElement);
eliminarListeners(nuevoBtnEliminar,newElement);
contadorTareas++;
input.value = '';

}
}

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
       agregarTarea();
    }
});

function agregarListeners(boton, elemento){
    boton.addEventListener('click', (e) =>{
        elemento.classList.remove('tarea');
        elemento.classList.add('tarea-terminada');
        
    });
}

function eliminarListeners(boton, elemento){
    boton.addEventListener('click', (e) =>{
        elemento.remove();
        
    });
}










