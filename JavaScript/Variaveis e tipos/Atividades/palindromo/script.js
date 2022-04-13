//Solução 1
function verificaPalindromo(string) {
  //Iá verificar o palindromo e irá receber uma string.

  if (!string) return 'Sring inexistente' //Se for diferente de string ela vai retornar e vai acabar.

  return (
    string
      .split('') //Separa as letras da string.
      .reverse() //Irá reverter as letras da string, colocar de trás para frente.
      .join('') === //Juntar essas letras revertidas.
    string
  )
}

//Solução 2

function verificaPalindromo2(string) {
  if (!string) return 'string inexistente'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      //Se o valor que etá no indice for diferente do valor do tamanho sa string. String.lenght -1 Serve para igualar o tamanho com o indece, e o menos i para igualar com a posiçãi da letra.
      return false
    }
  }

  return true
}
console.log(verificaPalindromo2('rjnb'))
