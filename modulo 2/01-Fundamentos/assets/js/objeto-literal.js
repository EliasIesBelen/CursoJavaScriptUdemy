let personaje = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 35.004,
        long: -100,
    },
    trajes: ['si','joselito','mark v'],
    direccion: {
        zip: '1009,90265',
        ubicacion: 'Malibu california'
    }
}

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Lat', personaje.coords.lat);

console.log('No. trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

//Mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Congela el objeto al momento de la instruccion, es decir que dinero no se añadira
//pero si modificara la direccion
Object.freeze(personaje);
personaje.dinero = 100000;
personaje.direccion.ubicacion = 'Costa rica';
console.log(personaje);

//Lo muestra por el orden de creacion de propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//Lo muestra por el orden de creacion de propiedades 
//Y muestra el valor de cada una
const valores = Object.values(personaje);
console.log(valores);    

