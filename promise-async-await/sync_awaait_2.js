function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;

    if (numerosProibidos.includes(aleatorio)) {
      reject("Números repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros, tentativas) {
  try {
    const numeros = [];

    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }

    return numeros;
  } catch (e) {
    if (tentativas > 10) {
      throw "Que chato!!";
    } else {
      gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(15)
.then(console.log)
.catch(console.log);