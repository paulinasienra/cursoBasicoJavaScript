var estudiantes = ["Paulina", "Maria", "Sergio","Rosa"];

function saludarEstudiantes(estudiante){
    console.log('Hola, ${estudiante}');
}

//FOR
for(var i = 0;i<estudiantes.length;i++){
    saludarEstudiantes(estudiantes[i]);
}

//FOROF
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//WHILE
while(estudiantes.length>0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}