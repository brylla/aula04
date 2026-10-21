console.log("Isabella Munhoz")

// if -> condições
// switch case -> condições
// while -> laços (enquanto)


var contador = 1

while (1 < 5) {
    console.log("contador: " + contador) // 1 -> 2 -> 3

    if (contador == 3) {
        break
    }

    contador = contador + 1 // 2 -> 3
}

// opção 2
contador = 1
while(true) {
    console.log("contador: " + contador) // 1 -> 2 -> 3

    if (contador == 3) {
        break
    }

    contador = contador + 1 // 2 -> 3
}


// 1- faça um laço que imprima o seu nome 15 vezes;
// 2- faça um laço que imprima o caculo da tabuda que foi escolhido pelo usuario.

nome = "Isabella Munhoz"
contador = 1

while(true) {
    console.log(nome) 

    if (contador == 15) {
        break
    }
    contador = contador + 1
}

caculoDaTabuada = 8
contador = 1

while(true) {
    console.log(caculoDaTabuada + "x" + contador + "=" + (caculoDaTabuada * contador))
    if (contador == 10) {
        break
    } 
    contador = contador + 1
}

// outra opção de fazer a tabuda

contador = 1 
var numeroUsuario = 8

while (contador <= 10){

    var resultado = (numeroUsuario * contador)
    console.log(numeroUsuario + " x " + contador + "=" + resultado)

    contador = contador + 1
}