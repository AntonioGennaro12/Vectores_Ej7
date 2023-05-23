// Parte I genera Titulos "h*" de acuerdo al vector números recibido
const miDiv1    = document.querySelector ("#mi-div1");

const numeros   = [1, 2, 3, 4, 5, 6];
const TITULO    = "Titulo";

miDiv1.innerHTML = `<p>Vectores - Ejercicio Nro 7 Parte I</p>`;
for (let cont=1;cont<=numeros.length;cont++) {
    miDiv1.innerHTML += `<h${cont}>${TITULO} ${cont}</h${cont}>`;
}

// Parte II agrega nombres distintos
// Defino un arreglo de Titulos distintos
const miDiv2    = document.querySelector ("#mi-div2");
const MATERIAS   = ["Matemáticas", "Castellano", "Geografía", "Historia", "Química", "Física"];

miDiv2.innerHTML += `<p>Vectores - Ejercicio Nro 7 Parte II</p>`;
for (let cont=1;cont <= numeros.length; cont++) {
    miDiv2.innerHTML += `<h${cont}>${(cont)} - ${MATERIAS[cont-1]}</${cont}>`;
}