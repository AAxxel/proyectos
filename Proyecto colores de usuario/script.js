const inputRojo = document.getElementById('rojo');
const inputAzul = document.getElementById('azul');
const inputVerde = document.getElementById('verde');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul){
    const colorRGB = `RGB(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', function(e){
rojo = e.target.value;
actualizarColor(rojo, verde, azul);
textoRojo.innerText = rojo;
});

inputVerde.addEventListener('change', function(e){
    verde = e.target.value;
    actualizarColor(rojo, verde, azul);
    textoVerde.innerText = verde;
});

inputAzul.addEventListener('change', function(e){
    azul = e.target.value;
    actualizarColor(rojo, verde, azul);
    textoAzul.innerText = azul;
});

