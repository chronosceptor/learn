const nombre = 'alvaro';
const apellido = 'larsen';

// template string
const nombreCompleto = `${ nombre } ${ apellido } ${ 2 + 7 }`;

function getSaludo(nombre) {
    return `Hola ${nombre}`;
};

console.log(`Esto es un texto: ${ getSaludo(nombreCompleto) }`);
