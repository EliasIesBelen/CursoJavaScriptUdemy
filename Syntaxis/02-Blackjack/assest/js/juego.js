// Declarar los tipos y cartas especiales
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {

    // Crear cartas numéricas (2-10)
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    // Crear cartas especiales (A, J, Q, K)
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    // Mezclar el mazo
    deck = _.shuffle(deck);

    console.log(deck); // Imprimir el mazo mezclado
    return deck;
};

const mazo = crearDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () =>{
    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop();
    

    console.log(deck);
    console.log(carta);
    return carta;
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length -1);

    return(isNaN( valor)) ?
                (valor === 'A') ? 11 : 10 
                :(valor * 1);
}
 const valor = valorCarta('3D');
 console.log(valor)