const  nombre = document.getElementsByName("nombre");
const  correo = document.getElementsByName("correo");
const  materia = document.getElementsByName("materia");
const  resultado = document.getElementById("resultado_texto");
const divResultado = document.querySelector('.resultado');

const link = document.getElementById('link-to-students');

let nombreValue, correoValue, materiaValue;
let registrosEstudiante = JSON.parse(localStorage.getItem('registros')) || [];

const boton = document.getElementsByTagName("button");

boton[0].addEventListener("click", (evt) => {

asignar();

evt.preventDefault();  
let error = validarCampos();
let consola = [];
let aux = '';
let existError = false;

resultado.innerText = '';
for (index in error){
  

    if (error[index][1]){
        aux = `Error al enviar formulario: ${error[index][0]}`;
        consola.push(aux);
        existError = true;
      }
}

if (!existError){
    aux = `Formulario enviado`;
    agregarRegistro();
        consola.push(aux);
        reiniciar();
        addSuccessfulClass();
}
else {
  addErrorClass();
}
  
for (index in consola){
    resultado.innerText += `${consola[index]} \n`
}


consola = [];
});

function asignar(){
  nombreValue = nombre[0].value;
  correoValue = correo[0].value;
  materiaValue = materia[0].value;
}

function reiniciar(){
  nombre[0].value = '' ;
  correo[0].value = '';
  materia[0].value = '';
}

function addSuccessfulClass(){
  if (divResultado.classList.contains('container_error')){
    divResultado.classList.remove('container_error');
  }

  divResultado.classList.add('container_successful');
}

function addErrorClass(){
  if (divResultado.classList.contains('container_successful')){
    divResultado.classList.remove('container_successful');
  }

  divResultado.classList.add('container_error');
}

validarCampos = () => {
  let error = [];
  if (nombreValue.length > 40 || nombreValue.length < 5) {
    error.push(["Nombre invalido", true]);
  }

  if (correoValue.length < 5 || correoValue.indexOf("@") == -1) {
    error.push(["Email invalido", true]);
  }
return error;
};

function agregarRegistro(){
  registrosEstudiante.push({
  
  nombre: nombreValue,  
  correo: correoValue,
  materia: materiaValue,
  
  });
  }

  link.addEventListener( 'click', (e) => {
    localStorage.setItem('registros',  JSON.stringify(registrosEstudiante));
  });
