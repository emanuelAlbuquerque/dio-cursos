//Estruturas de condição.
var jogador1 = 1
var jogador2 = 1
var placar

//if ternario
jogador1 != -1 && jogador2 != -1
  ? console.log('Os jogadores são validos')
  : console.log('Jogadores invalidos')
//
if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador 1 fez um gol')
  placar = jogador1 > jogador2
  console.log(placar)
} else if (jogador2 > 2 && jogador1 == 0) {
  console.log('Jogador 2 fez um gol')
  placar = jogador2 > jogador1
  console.log(placar)
} else if (jogador1 == jogador2) {
  console.log('A partida foi empate')
  placar = jogador1
} else {
  console.log('Ningém marcou ponto')
}

// switch case

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log('Jogador 1 ganhou')
    break
  case (placar = jogador2 > jogador1):
    console.log('Jogador 2 ganhou')
    break
  default:
    console.log('Ninguém ganhou')
}

//Estruturas de Repetição.
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {
  propiedade1: 'valor1',
  propiedade2: 'valor2',
  propiedade3: 'valor3'
}

//For = Execulta uma instrução at´que ela seja falsa.

for (let indice = 0; indice < array.length; indice++) {
  console.log(indice)
}
//length está se referindo ao tamanho do array.

//for-in com array
for (let i in array) {
  console.log(i)
}

//for-in com object
for (i in object) {
  console.log(i)
}
//Resultados saem em string

//for-of
for (i of array) {
  console.log(i)
} //Imprime o valor que está em cada indice no array.

//Com object
for (i of object.propiedade1) {
  console.log(i)
} //Não da para ultilizar o for-of com objetos.

//While - Execulta uma instrução enquanto uma determinada condição for verdadeira, a verificação é feita antes da execucão.
var a = 0

while (a < 10) {
  a++
  console.log(a)
}

//do-while - Execulta a instrução até que a condição seja falsa, a verificação é feita depois da excução.
var b = 0
do {
  b++
  console.log(b)
} while (b < 10)
