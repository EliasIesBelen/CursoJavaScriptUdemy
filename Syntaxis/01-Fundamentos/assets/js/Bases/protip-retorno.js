const crearPersona = (nombre, apellido) =>  ({nombre: nombre, apellido: apellido});
    
const persona = crearPersona('fernando', 'Jimenez')
console.log(persona);

const imprimeArgumentos = (...args) => {
    // console.log(arguments);
    return args;
}

const [casado, vivo, nombre] = imprimeArgumentos(10, true, 'Fernando')
console.log({casado, vivo, nombre});


const {apellido: nuevoApellido} = crearPersona('fernando', 'Jimenez');
console.log({nuevoApellido});


const Tony = {
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['si','joselito','mark v'],
}

// const imprimePropiedades = (personaje) =>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// };

const imprimePropiedades = ({nombre, codeName,vivo,edad = 15,trajes}) =>{

    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
};

imprimePropiedades(Tony);