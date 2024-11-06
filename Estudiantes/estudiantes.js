const tablaEstudiantes = document.querySelectorAll('.table-body');
const link = document.getElementById('registro');

let estudiantes = [
    { 
        nombre: 'Arturo',
        correo: 'arturo@gmail.com',
        materia: 'Fisica II'
    },
    { 
        nombre: 'Maria',
        correo: 'maria@example.com',
        materia: 'Quimica'
    },
    { 
        nombre: 'Luis',
        correo: 'luis@example.com',
        materia: 'Matemáticas'
    },
    { 
        nombre: 'Andrea',
        correo: 'andrea@example.com',
        materia: 'Biología'
    },
    { 
        nombre: 'Carlos',
        correo: 'carlos@example.com',
        materia: 'Historia'
    },
    { 
        nombre: 'Ana',
        correo: 'ana@example.com',
        materia: 'Geografía'
    },
    { 
        nombre: 'Jorge',
        correo: 'jorge@example.com',
        materia: 'Química'
    },
    { 
        nombre: 'Sofía',
        correo: 'sofia@example.com',
        materia: 'Literatura'
    },
    { 
        nombre: 'Pablo',
        correo: 'pablo@example.com',
        materia: 'Física I'
    },
    { 
        nombre: 'Lucía',
        correo: 'lucia@example.com',
        materia: 'Arte'
    },
    { 
        nombre: 'David',
        correo: 'david@example.com',
        materia: 'Filosofía'
    },
    { 
        nombre: 'Marcos',
        correo: 'marcos@example.com',
        materia: 'Cálculo'
    },
    { 
        nombre: 'Laura',
        correo: 'laura@example.com',
        materia: 'Inglés'
    },
    { 
        nombre: 'Pedro',
        correo: 'pedro@example.com',
        materia: 'Economía'
    },
    { 
        nombre: 'Claudia',
        correo: 'claudia@example.com',
        materia: 'Música'
    },
    { 
        nombre: 'Diego',
        correo: 'diego@example.com',
        materia: 'Educación Física'
    },
    { 
        nombre: 'Gabriela',
        correo: 'gabriela@example.com',
        materia: 'Tecnología'
    },
    { 
        nombre: 'Raúl',
        correo: 'raul@example.com',
        materia: 'Sociología'
    },
    { 
        nombre: 'Valeria',
        correo: 'valeria@example.com',
        materia: 'Biología II'
    },
    { 
        nombre: 'Francisco',
        correo: 'francisco@example.com',
        materia: 'Estadística'
    }
];

let estudiantesWeek1 = [];
let estudiantesWeek2 = [];


let registros =  JSON.parse(localStorage.getItem('registros')) || [];
if ( registros.length > 0 ) {
    for ( const nuevoRegistro of registros ){
        estudiantes.push(nuevoRegistro);
    }
}
actualizarTablas();


function llenarTable(table, grupoEstudiantes, tipo){
    table.innerHTML = '';
    for (const [index, estudiante] of grupoEstudiantes.entries() ){
        const newTr = document.createElement('tr');
        const newId = document.createElement('td');
        const newName = document.createElement('td');
        const newEmail = document.createElement('td');
        const newMateria = document.createElement('td');
        const newOpciones = document.createElement('td');
    
        const btnOpcion1 = document.createElement('button');
        const btnOpcion2 = document.createElement('button');
    
    
    
        newId.innerHTML = index+1;
        newName.innerHTML = estudiante.nombre;
        newEmail.innerHTML = estudiante.correo;
        newMateria.innerHTML = estudiante.materia;
     
    
        btnOpcion1.classList.add('btn');
        btnOpcion2.classList.add('btn');

        if (tipo == 'completo'){
            btnOpcion1.innerHTML = '1';
            btnOpcion2.innerHTML = '2';
            btnOpcion1.classList.add('week1');
            btnOpcion2.classList.add('week2');
            agregarAddListener(estudiante, btnOpcion1, 'week1', index);
            agregarAddListener(estudiante, btnOpcion2, 'week2', index);
        }

        else if ( tipo == 'week1' ){
            btnOpcion1.innerHTML = 'Apb';
            btnOpcion2.innerHTML = 'X';
            btnOpcion1.classList.add('aprobo');
            btnOpcion2.classList.add('devolver');
            eliminarAddListener(btnOpcion1, 'aprobarWeek1', index);
            eliminarAddListener(btnOpcion2, 'devolverWeek1', index);
        }

        else if ( tipo == 'week2' ){
            btnOpcion1.innerHTML = 'Apb';
            btnOpcion2.innerHTML = 'X';
            btnOpcion1.classList.add('aprobo');
            btnOpcion2.classList.add('devolver');
            eliminarAddListener(btnOpcion1, 'aprobarWeek2', index);
            eliminarAddListener(btnOpcion2, 'devolverWeek2', index);
        }
        
    
        newOpciones.appendChild(btnOpcion1);
        newOpciones.appendChild(btnOpcion2);
        
        newTr.appendChild(newId);
        newTr.appendChild(newName);
        newTr.appendChild(newEmail);
        newTr.appendChild(newMateria);
        newTr.appendChild(newOpciones);
    
        if ( (index+1)%2 == 0 ){
            newTr.classList.add('tr-impar');
        }
        else{
            newTr.classList.add('tr-par');
        }
    
        table.appendChild(newTr);
    }
}

function actualizarTablas(){
    llenarTable(tablaEstudiantes[0], estudiantes, 'completo' );
    llenarTable(tablaEstudiantes[1], estudiantesWeek1, 'week1' );
    llenarTable(tablaEstudiantes[2], estudiantesWeek2, 'week2' );
}

function agregarAddListener(estudiante, btn, tipoBtn, index){
    switch (tipoBtn){
        case 'week1':
            btn.addEventListener( 'click', () =>{
                estudiantesWeek1.push(estudiante);
                estudiantes.splice(index,1);
                actualizarTablas();
            } );
            break;

        case 'week2':
            btn.addEventListener( 'click', () =>{
                estudiantesWeek2.push(estudiante);
                estudiantes.splice(index,1);
                actualizarTablas();
            } );
            break;
            default:
                alert('Ha habido un error');
    }
}

function eliminarAddListener(btn, tipo, index){
    btn.addEventListener('click', () =>{
        if (tipo == 'aprobarWeek1') {
            estudiantesWeek1.splice(index,1);
        }

        else if ( tipo == 'devolverWeek1' ) {
            estudiantes.push(estudiantesWeek1[index]);
            estudiantesWeek1.splice(index,1);
        }

        if (tipo == 'aprobarWeek2') {
            estudiantesWeek2.splice(index,1);
        }

        else if ( tipo == 'devolverWeek2' ) {
            estudiantes.push(estudiantesWeek2[index]);
            estudiantesWeek2.splice(index,1);
        }
        actualizarTablas();
    });
}

link.addEventListener( 'click', () => {
    localStorage.setItem('registros', JSON.stringify(registros));
});






