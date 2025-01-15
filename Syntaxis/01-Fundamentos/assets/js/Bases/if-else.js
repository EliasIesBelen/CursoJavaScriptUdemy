let a = 5;

if(a >= 10){
    console.log('A es mayor o igual 10');
}else {
    console.log('A es menor 10');
}

console.log(`Fin de programa`);

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDate();
console.log({dia});

// === identico en su totalidad
if(dia === 5){
    console.log('Domingo');
}else if(dia === 1){
    console.log('No es domingo');
}

//Sin usar If else
const diasSemana = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves'];
dia = 3;

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
}

console.log(diasSemana[dia])

