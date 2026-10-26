// atividade: Imprima todos os números pares de 1 a 20 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR)

// a formula que usei do "do while":
// var contador = valorInicial;

// do {
//    if (contador % divisor === resto) {
//      console.log("contador: " + contador);
//    }
//    contador++;
//} while (contador <= valorLimite);


var contador = 1;
do {
    if (contador % 2 === 0) {
        console.log("contador: " + contador)
    }
    contador++
} while (contador <= 20);

////////////////////////

// a formula que usei do "while":

// var contador = valorInicial;

// while (contador <= valorLimite) {
//   if (contador % divisor === resto) {
//       console.log("contador: " + contador);
//   }
//   contador++;
//}

var contador = 1;
while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log("contador: " + contador)
    }
    contador++
}

////////////////////////

// a formula que usei do "for":

// for (var contador = valorInicial; contador <= valorLimite; contador++) {
//   if (contador % divisor === resto) {
//       console.log("contador: " + contador);
//   }
// }

for (var contador = 1; contador <= 20; contador++) {
    if (contador % 2 === 0) {
        console.log("contador: " + contador)
    }
}   

///////////////////////

// atividade: Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição (USANDO O WHILE E FOR).

// a formula que usei so "while":
// var soma = valorInicial;

// for (var contador = valorInicial; contador <= valorLimite; contador++) {
//   soma = soma + contador;
// }

var soma = 0;
var contador = 1;
while (contador <= 100) {
    soma = soma + contador;
    contador++
}
console.log("Soma: " + soma);

////////////////////////

// a formula que usei do "for":
// for (var contador = valorInicial; contador <= valorLimite; contador++) {
    // código
//}

soma = 0;

for (var contador = 1; contador <= 100; contador++) {
    soma = soma + contador;
}
console.log("Soma: " + soma);

////////////////////////

// atividade: Imprima todos os números IMPARES de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).

// a formula que usei do "do while":
// var contador = valorInicial;
// do {
//    if (contador % divisor === resto) {
//      console.log("contador: " + contador);
//    }
//    contador++;
//} while (contador <= valorLimite);

var contador = 1;
do {
    if (contador % 2 !== 0) {
        console.log("contador: " + contador);
    }
    contador++;
} while (contador <= 50);

////////////////////////

// ! = simbolo de negação

// a formula que usei do "while":
// var contador = valorInicial;
// while (contador <= valorLimite) {
//   if (contador % divisor === resto) {
//       console.log("contador: " + contador);
//   }
//   contador++;
//}

var contador = 1;
while (contador <= 50) {
    if (contador % 2 !== 0) {
        console.log("contador: " + contador)
    }
    contador++
}

////////////////////////

// a formula que usei do "for":
// for (var contador = valorInicial; contador <= valorLimite; contador++) {
//   if (contador % divisor === resto) {
//       console.log("contador: " + contador);
//   }
// }        

for (var contador = 1; contador <= 50; contador++) {
    if (contador % 2 !== 0) {
        console.log("contador: " + contador)
    }
}

////////////////////////

// atividade: Implemente uma contagem regressiva de 10 até 0 utilizando um laço de repetição (USANDO O WHILE E FOR).

// a formula que usei do "while":
// var contador = valorInicial;
// while (contador >= valorLimite) {
//   console.log("contador: " + contador);
//   contador--;
// }

var contador = 10;
while (contador >= 0) {
    console.log("contador: " + contador)
    contador--
}

////////////////////////

// a formula que usei do "for":
// for (var contador = valorInicial; contador >= valorLimite; contador--) {
//   console.log("contador: " + contador);
// }

for (var contador = 10; contador >= 0; contador--) {
    console.log("contador: " + contador)
}
