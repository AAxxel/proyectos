  const botonInicioPausa = document.getElementById('boton-inicio-pausa');
  const botonReiniciar = document.getElementById('boton-reiniciar');
  const cronometro = document.getElementById('cronometro');

  let [hora, minutos, segundos] = [0,0,0];

  let intervaloTiempo;
  let estadoCronometro = 'pausado';

  function actualizarCronometro(){
    segundos++;

    if (segundos/60===1){
        minutos++;
        segundos = 0;
    }

    if (minutos/60 === 1){
        hora++;
        minutos = 0;
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(hora)

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
  }

  function asignarFormato(unidadTiempo){
     return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
  }

  botonInicioPausa.addEventListener('click', function(){
    if (estadoCronometro == 'pausado'){
        intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.classList.add('pausa');
        botonInicioPausa.classList.remove('iniciar');
        estadoCronometro = 'andando';
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
    else {
        window.clearInterval(intervaloTiempo);
        botonInicioPausa.classList.add('iniciar');
        botonInicioPausa.classList.remove('pausa');
        estadoCronometro = 'pausado';
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
  });

  botonReiniciar.addEventListener('click', function(){
    window.clearInterval(intervaloTiempo);
    [hora, minutos, segundos] = [0, 0, 0];
    cronometro.innerText = `00:00:00`;
    botonInicioPausa.classList.add('iniciar');
        botonInicioPausa.classList.remove('pausa');
        estadoCronometro = 'pausado';
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  });