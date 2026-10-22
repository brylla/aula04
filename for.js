// for -> para
// declaração ; condição ; incremento


for (var i = 1; i <= 3; i++){
     console.log("i: " + i)
 }
///////////////////////////

i = 1 

i = i + 1
console.log(i)

i++
i++
i++
i++
i++
i++
console.log(i)

///////////////////////////

for (var i = 1; i <= 15; i++){
    console.log("i: " + i)
}

////////////////////////////
 // continue -> pula o bloco de código (i == 7) e vai pro próximo bloco

for (var i= 1; i<= 15; i++){
    if (i == 7) { 
        continue
    }
    console.log("valor atual: " + i)
}

/////////////////////////////

for (var i= 1; i<= 15; i++){
    console.log("meu nome é: " + "Isabella Munhoz" + " x" + i)
}

//////////////////////////////

var calculoDaTabuada = 8

for (var i= 1; i<= 10; i++){
    console.log(calculoDaTabuada + " x " + i + " = " + (calculoDaTabuada * i))
}