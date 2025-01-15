const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares': '10 dolares'

console.log(elMayor(20,11));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArrr = [
    'Peter',
    'Tony',
    'Dr.Strange',
    amigo ? 'Thor' : 'loki'
];

const nota = 82;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F'

console.log(grado);
console.log(amigosArrr);