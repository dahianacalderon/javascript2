let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

numeros.forEach(function(numero) {
  if (numero % 2 === 0) {
    numerosPares.push(numero);
  }
});

console.log("Números pares: " + numerosPares);


