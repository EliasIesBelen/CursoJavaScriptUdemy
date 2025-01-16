// Declarar los tipos y cartas especiales
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosOrdenador = 0;
const puntosHtml = document.querySelectorAll('small');

//Referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btNuevo');
const btnDetener = document.querySelector('#btnDetener');


const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasOrdenador = document.querySelector('#Computadora-cartas');


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
    return carta;
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length -1);

    return(isNaN( valor)) ?
                (valor === 'A') ? 11 : 10 
                :(valor * 1);
    // turno computadora
}
const turnocomputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();
        puntosOrdenador = puntosOrdenador + valorCarta(carta);
        puntosHtml[1].innerText = puntosOrdenador;
    
        //
        const imgCarta = document.createElement('img');
        imgCarta.src = `assest/cartas/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasOrdenador.append(imgCarta);
        if(puntosMinimos > 21){
            break;
        }
    }while( (puntosMinimos > puntosOrdenador) && (puntosMinimos <= 21));

    setTimeout(() =>{

        if(puntosJugador > puntosOrdenador){
            alert('Perdiste')
        }else if(puntosOrdenador> puntosJugador){
            alert('Ganaste')
        }else{
            alert('Empate')
        }
    }, 100);

}

//Eventos
btnPedir.addEventListener('click', () =>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    //
    const imgCarta = document.createElement('img');
    imgCarta.src = `assest/cartas/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        turnocomputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('21, ganaste');
        btnPedir.disabled = true;
        turnocomputadora(puntosJugador); 
    }
});

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    const carta = pedirCarta();
    turnocomputadora(puntosJugador);

});


btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosOrdenador = 0;
    puntosHtml[0] = 0;
    puntosHtml[1] = 0;

    divCartasJugador.innerHTML = '';
    divCartasOrdenador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});
