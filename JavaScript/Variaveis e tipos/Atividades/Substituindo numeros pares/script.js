function substituiPares(array) {
  if (!array) return -1 //Se for um array que não existe o resultado saira -1(null, undefined...)
  if (!array.length) return -1 //Se for um array vazio ira retornar -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log('Você já é zero!!') //Se tiver algum valor 0 ele vai falar
    } else if (array[i] % 2 === 0) {
      //Se a divisão do valor por 2 der resto 0 ele sera par
      console.log(`Substituindo ${array[i]} por 0...`)
      array[i] = 0 //Irá substituir por 0
    }
  }
  return array
}

let array = [1, 50]
console.log(substituiPares(array))
