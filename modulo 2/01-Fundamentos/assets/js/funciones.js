function saludar(nombre){
    //console.log(arguments);
    //console.log('hola ' + nombre);
    return 10; 
}

const saludar2 = function(nombre){
    console.log('hola ' + nombre);
}

const saludarFlecha = (nombre) => {
    console.log('hola flecha',  nombre);
};

const retorno = saludar('Fernando', 40, true, 'Costa Rica');
//console.log({retorno});
//saludar2('Fernando2');
//saludarFlecha('Fernando3');

function sumar(a,b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar3 = (a,b) => a + b;

//console.log(sumar(1,2));
//console.log(sumar2(1,2));
//console.log(sumar3(1,2));

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());

