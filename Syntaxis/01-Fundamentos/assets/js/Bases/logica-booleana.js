const regresaTrue = ()=> {
    console.log('regresa true');
    return true;
}

const regresaFalse = ()=> {
    console.log('regresa false');
    return false;
}

console.warn('Not a la negracion');
console.log(!true);
console.log(!regresaFalse());
console.log('and');
console.log(true && true);
console.log(!false && true);

console.log('=========')
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.warn('Or');
console.log(true || false);
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola mundo';
console.log({a1})