const miDiv1    = document.querySelector ("#mi-div1");

const numeros   = [1, 2, 3, 4, 5, 6];

const TITULO    = "Titulo";

for (let cont=1;cont<=numeros.length;cont++) {
    miDiv1.innerHTML += ` <h2>${TITULO} ${cont}</h2>`;
}

// Parte II agrega nombres distintos
// Defino un arreglo de Titulos distintos

const MATERIAS   = ["Matematicas", "Lengua", "Fisica", "Quimica", "Historia", "Geografía"];

for (let cont=0;cont < numeros.length; cont++) {
    miDiv1.innerHTML += ` <h2>${(cont+1)} - ${MATERIAS[cont]}</h2>`;
}