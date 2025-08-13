//funcion regular
function determinarNumero() {
  let num = Number(prompt("Ingresa un numero:")); // pide numero
    if (num % 2 === 0) {
    console.log(`${num} es par`);
    } else {
    console.log(`${num} es impar`);
    }
}

determinarNumero();

//funcion arrow

const determinarNumeroArrow = () => {
  let num = Number(prompt("Ingresa un numero:")); // Pide numero
    console.log(num % 2 === 0 ? `${num} es par` : `${num} es impar`);
};

determinarNumeroArrow();

// % se utiliza para obtener el residuo de una division. Si el residuo es 0, el numero es par, caso contrario, el numero es impar.