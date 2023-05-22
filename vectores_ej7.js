const miDiv1    = document.querySelector ("#mi-div1");

const numeros   = [1, 2, 3, 4, 5, 6];

const TITULO    = "Titulo";

for (let cont=0;cont<numeros.length;cont++) {
    miDiv1.innerHTML += ` <h2>${TITULO} ${(cont+1)}</h2>`;
}