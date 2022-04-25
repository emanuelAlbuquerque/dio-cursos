/* O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof*/


function validaArray(arr, num){
  try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros.")// Criou a primeira validação.

  if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object')// Criou a segunda validação

  if(typeof arr !== 'number') throw new TypeError('num precisa ser do tipo number')// Criou a terceira validação

  if(arr.length !== num) throw new RangeError("Tamanho inválido.")// Criou a quarta validação.
  return arr;
  }
  catch(e)
  {
    if(e instanceof ReferenceError){
      console.log('Este é um ReferenceError')
      console.log(e.message)
    } else if(e instanceof TypeError){
      console.log('Este é um TypeError')
      console.log(e.message)
  } else if(e instanceof RangeError){
    console.log('Este é um RangeError')
    console.log(e.message)
}else {
  console.log('Tipo de erro não esperado: '+ e)
}
  }//Pega os tipos dos erros que estão sendo transmitido e faz uma verificação
}

console.log(validaArray([1, 3, 5], 5))
