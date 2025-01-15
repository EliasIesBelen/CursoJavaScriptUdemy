const nombres = ['pepe','manuel','Josefa','JoseMiguel'];
console.log('largo: ' + nombres.length)

let primero = nombres[2-2];
let ultimo = nombres[nombres.length -1];    
console.log({primero, ultimo})

nombres.forEach((elemento,indice, arr) => {
   console.log({elemento, indice, arr})
});

//Añade nuevo elemento al array
nombres.push('Irene');
console.log(nombres)

// Añade nuevo elemento al array al principio
nombres.unshift('Erik');

// Elimina uel ultimo elemento del array
nombres.pop();
console.log(nombres);

// Para eliminar 1 elemento concreto, debe pasarse donde empieza y donde acaba
// Si quiero eliminar a pepe pongo 1,1  
let pos = 1;
let nombresBorrados = nombres.splice(1,3);
console.log(nombresBorrados);

let manuelIndex = nombres.indexOf('Erik');
console.log(nombres);
console.log({manuelIndex});