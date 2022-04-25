/*    Atividades
--Map
  -Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e  depois sem ele.
--Filter
  -Filtre e retorne todos os números pares de um array.
--Reduce
  -Some todos os números de um array
  -Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.*/

//MAP - Com this

const maca = {
  value: 2,
}

const laranja = {
  value: 3, 
}

function mapComThis(arr, thisArg){
  return arr.map(function(item){
    return item * this.value;
  }, thisArg)//A função pega o item do array e multiplica pelo value, e chama a constante.
}

const nums = [1, 2] // Array para multiplicar de acordo com o array.

console.log('this --> maça' , mapComThis(nums, maca))
console.log('this --> laranja' ,mapComThis(nums, laranja))

//MAP - sem o this

function mapSemThis(array){
  return array.map(function(item){
    return item * 2
  })
}

const numeros = [2, 4, 6, 8, 10]

console.log(numeros)
console.log(mapSemThis(numeros))

//-------------------------------------------------------------------------//

//FILTER
function filtrarPar(arr){
  return arr.filter(function(item){
    return item % 2 === 0
  })//Pega os itens do array, se for par vai apresentar no conole.
}

const meuArray = [1, 4, 77, 88, 90, 100]

console.log(filtrarPar(meuArray))

//---------------------------------------------------------------------------------------//

//REDUCE

//1-
function somaNumeros(arr){
  return arr.reduce(function(prev, current){
    console.log({prev})//Valor inicial ou anterior
    console.log({current})//Valor atual ou o próximo
    return prev + current//Somar o valor inicial com o próximo
  })
}

const arr = [ 1, 2, 5, 6, 7, 8]

console.log(somaNumeros(arr))



//2-
const lista = [
  {
    name: 'sabao em po',
    preco: 30
  },
  {
    name: 'cereal',
    preco: 12
  },
  {
    name: 'toalha',
    preco: 30
  }
]

const saldoDisponivel = 100

//A função irá inicializar com valor inicial de 100, e irá para a primeira rodada.
function calculaSaldo(saldoDisponivel, lista){
  return lista.reduce(function(prev, current, index){
    console.log('rodada', index + 1)
    console.log({prev})
    console.log({current})
    return prev - current.preco
  }, saldoDisponivel)
}

console.log('O saldo final foi de: R$' ,calculaSaldo(saldoDisponivel, lista))