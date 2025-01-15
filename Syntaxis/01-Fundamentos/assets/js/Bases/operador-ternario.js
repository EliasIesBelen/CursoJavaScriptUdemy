const dia = 0;
const horaActual = 10;

let horaApertura, mensaje;

// if(dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado ${horaApertura}` ;
// }
mensaje = horaActual >= horaApertura ? 'Esta abierto': `Esta cerrado ${horaApertura}`;

console.log(horaApertura, mensaje);