// O que são arryas ou vetores.

//Como declarar um array
/*let array = ['string', 1, true]
console.log(array)
*/

let array2 = ['string', 1, true, ['array1'], ['array3'], ['array3']]
//console.log(array2[0])

//forEach
/*array2.forEach(function (item, index) {
  console.log(item, index)
})//Mostra os indices e os intens de um array.
*/

//push

/*array2.push('novo item')
console.log(array2)//Adiiona um novo item no final do array.
*/

//pop

/*array2.pop()
console.log(array2)//Apaga um item no final do array.
*/

//shift

/*array2.shift()
console.log(array2)//Remove um item do inicio do array.
*/

//unshift

/*array2.unshift('novo item no inicio')
console.log(array2)//Adiciona um novo item no inicio.
*/

//indexOf

/*console.log(array2.indexOf(true))//Mostra o indece de um valor no array, nesse exemplo o true.
 */

//splice

/*array2.splice(0, 3)
console.log(array2)//Apagou os itens do array 0 até o 3.
*/

//slice

/*let novoarray = array2.slice(0, 3)
console.log(array2)
console.log(novoarray) //pega os três primeiros itens no exemplo.
*/

//Objetos:

var object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array2'],
  objectInterno: { objectInterno: 'objeto interno' }
}
console.log(object.number)
//Se colocar um "." depois do nome do objeto ele vai retornar um valor escolhido do objeto.

//Destruturar o objeto

var string = object.string
console.log(string)

var arrayInt = object.array
console.log(arrayInt)

var { string, boolean, objectInterno } = object
console.log(string, boolean, objectInterno)
