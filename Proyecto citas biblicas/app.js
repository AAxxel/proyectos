const texto = document.getElementById('texto');
const versiculoTexto = document.getElementById('versiculoTexto');
const boton = document.getElementById('boton');


texto.innerText = `"${cita}"`;
versiculoTexto.innerText = versiculo;
function obtenerCita(){
    numeroRandom = Math.floor(Math.random()* citasBíblicas.length);
    versiculo = citasBíblicas[numeroRandom][0];
    cita = citasBíblicas[numeroRandom][1];
}

boton.addEventListener('click', (e) => {
    obtenerCita();
    texto.innerText =`"${cita}"`;
versiculoTexto.innerText = versiculo; 
this.boton;
});