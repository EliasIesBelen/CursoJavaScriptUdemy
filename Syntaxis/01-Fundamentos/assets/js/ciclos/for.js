const carros = ['ford', 'Mazda', 'honda', 'toyota'];

console.warn('for tradicional');

for(let i = 0 ; i < carros.length ; i++){
    console.log(carros[i]);
}

console.warn('for in');
for(let i in (carros)){
    console.log(carros[i]);
}

console.warn('for of');
for(let carro of carros){
    console.log(carro);
}