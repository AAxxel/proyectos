const boton = document.getElementById('boton-color');
const color = document.getElementById('color');
const body = document.querySelector('body');

function generarColorHexaAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

for(let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random()*16);
    colorHex += digitos[indiceAleatorio];
}
return colorHex;
}

function asignarColor(){
    let colorAleatorio = generarColorHexaAleatorio();
    color.textContent = colorAleatorio;
    body.style.backgroundColor = colorAleatorio;

}

boton.addEventListener('click', asignarColor);