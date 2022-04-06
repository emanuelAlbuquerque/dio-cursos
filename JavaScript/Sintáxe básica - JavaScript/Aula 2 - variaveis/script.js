//Tipos primitivos:

//-->Boolean
var vOUf = false
console.log(vOUf)
console.log(typeof vOUf) //descobre o tipo da variável

// number
var numero = 1
console.log(numero)
console.log(typeof numero)
//descobre o tipo da variável

//string
var nome = 'Emanuel'
console.log(nome)
console.log(typeof nome)
//descobre o tipo da variável

//Como declarar

//var
var variavel = 'emanuel'
variavel = 'Ellen'
console.log(variavel)

//let
let variavel2 = 'Emanuel'
variavel2 = 'Ellen'
console.log(variavel2)

//const
const constant = 'Emanuel'
console.log(constant) //Não pode alterar o se valor e precisa sempre de um valor inicial.

//Escopo

//Global
var escopoGlobal = 'global'
console.log(escopoGlobal)

//Local
function escopoLocal() {
  let escopoLocal = 'local'
  console.log(escopoLocal) //se o console for fora da função, ou seja, fora do escopo, a variavel não vai ser vista.
}
escopoLocal() //chamando a função escopoLocal

//Atribuição

var atribuir = 'emanuel' //um sinal de igual atribui
console.log(atribuir)

//Igual
var igual = 2
console.log(igual == 2) //dois iguais é igualdade
console.log('2' == 2) //Não precisa ser do mesmo tipo.

//igualdade identica
var identica = 5
console.log(identica === 5) //Aqui a variavel e a comparação tem que ser do mesmo tipo
