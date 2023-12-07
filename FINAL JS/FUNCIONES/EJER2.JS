function esNumeroPar(numero) {
    return numero % 2 === 0;
  }
  
  let numeroEvaluado = 4;
  if (esNumeroPar(numeroEvaluado)) {
    console.log(numeroEvaluado + " es un número par.");
  } else {
    console.log(numeroEvaluado + " no es un número par.");
  }

  
  