const clase = document.getElementById('entregable');
clase.innerHTML = 3;

const lista = document.getElementById('lista');
let alumno;
let nota;
let maxima;
let aprobacion;
let condicion;

alert('Bienvenido, esta aplicación te permite listar las notas de tus alumnos');
alert('El proceso es el siguiente: Primero vas a ingresar el nombre de tu alumno, y luego su nota');

//Solicitar y validar nota máxima
maxima = +prompt('¿Cuál es la nota máxima?');
while (isNaN(maxima)==true || maxima<0 || maxima != parseInt(maxima)) {
    alert('No ingresaste una nota máxima válida, la nota debe ser numérica, positiva y entera');
    maxima = +prompt('¿Cuál es la nota máxima?');
}


//Solicitar y validar nota mínima de aprobación
aprobacion = +prompt('¿Cuál es la nota mínima para aprobar?');
while (isNaN(aprobacion)==true || aprobacion<0 || aprobacion != parseInt(aprobacion)) {
    alert('No ingresaste una nota de aprobación válida, la nota debe ser numérica, positiva y entera');
    aprobacion = +prompt('¿Cuál es la nota mínima para aprobar?');
}

//Solicitar y validar cantidad de alumnos
let cantAlumnos = +prompt('¿Cuántos alumnos vas a calificar hoy?');
while (isNaN(cantAlumnos) == true) {
            alert('No ingresaste una cantidad adecuada, por favor ingresa solamente números sin puntuación ni letras');
            cantAlumnos = +prompt('¿Cuántos alumnos vas a calificar hoy?');
} 
while ( cantAlumnos < 1){
        alert('No ingresaste una cantidad adecuada, por favor ingresa solamente números positivos');
        cantAlumnos = +prompt('¿Cuántos alumnos vas a calificar hoy?');
}
while (cantAlumnos != parseInt(cantAlumnos)){
    alert('No ingresaste una cantidad adecuada, por favor ingresa solamente números enteros');  
        cantAlumnos = +prompt('¿Cuántos alumnos vas a calificar hoy?');
}

//Input de datos: Nombre de alumno y nota
for (i=0;i<cantAlumnos;i++){
    alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    while(isNaN(alumno) == false){
        alert('No ingresaste un nombre válido, por favor ingresá un nombre válido para tu alumno');
        alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    }
    while(alumno.length < 4){
    alert('El nombre es demasiado corto, por favor ingresá un nombre de al menos cuatro caracteres para tu alumno');
    alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    }
    nota = +prompt('Ahora ingresa su nota entre 0 y '+aprobacion);
    while(isNaN(nota)==true) {
        alert('No ingresaste una nota válida, la nota debe ser numérica entre 0 y '+aprobacion);
        nota = +prompt('Ingresa nuevamente la nota');
    }
    while (nota < 0 || nota > maxima){
        alert('No ingresaste una nota válida, la nota debe ser entre 0 y '+maxima+', ambos inclusive');
        nota = +prompt('Ingresa nuevamente la nota');
    }
    nota>=aprobacion ? condicion = 'Aprobó' : condicion = 'Desaprobó';
    
    let item = document.createElement('li');
    let info = document.createTextNode(alumno + ': ' + nota + '. ' + condicion);
    item.appendChild(info);
    lista.appendChild(item);
}

let alumnoAdicional = confirm('¿Querés ingresar otro alumno?');
while (alumnoAdicional == true) {
    alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    while(isNaN(alumno) == false){
        alert('No ingresaste un nombre válido, por favor ingresá un nombre válido para tu alumno');
        alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    }
    while(alumno.length < 4){
        alert('El nombre es demasiado corto, por favor ingresá un nombre de al menos cuatro caracteres para tu alumno');
        alumno = prompt('Por favor, ingresa el nombre de tu alumno');
    }
    nota = +prompt('Ahora ingresa su nota');
    while(isNaN(nota)==true) {
        alert('No ingresaste una nota válida, la nota debe ser numérica');
        nota = +prompt('Ingresa nuevamente la nota');
    }
    while (nota < 0 || nota > aprobacion){
        alert('No ingresaste una nota válida, la nota debe ser entre 0 y '+aprobacion+', ambos inclusive');
        nota = +prompt('Ingresa nuevamente la nota');
    }
    let item = document.createElement('li');
    let info = document.createTextNode(alumno+': '+nota);
    item.appendChild(info);
    lista.appendChild(item);
    alumnoAdicional = confirm('Querés ingresar otro alumno?');
}