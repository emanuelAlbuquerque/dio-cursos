/*Criar uma função que receba dois números como parâmetros.
  1 - Confirar se os números são iguais.
  2 - Confira se a soma dos números é maior que 10 ou menor que 20
  3 - Retorne uma string dizendo "Os números não/são iguais. Sua soma é SOMA, que é MAIOR/MENOR que 10 e MAIOR/MENOR que 20"*/ 

  function compara(num1, num2) {
    /*const saoIguais = num1 === num2 //se for igual vai retornar true
    const soma = num1 + num2*/

    /*if(saoIguais){
      return "São igaus"
    }
    return "Não são igauis"*/

    /*return saoIguais ? "São igauis" : "Não são iguais."*/

    const primeiraFrase = criaPriFrase(num1, num2)//Recebe o valor.
    const segundaFrase = criaSegFrase(num1, num2)

    return `${primeiraFrase} e ${segundaFrase}`
  }

  function criaPriFrase(num1, num2){
    let saoIguais = ''
    if(num1 !== num2){
      saoIguais = 'não'
      //Criou uma variavel para receber o valor, se num1 for diferente de num2, a váriavel vai receber não.
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.` //Junta os valores e forma a frase.
  }

  function criaSegFrase(num1, num2){
    const soma = num1 + num2
    let result10 = 'menor'
    let result20 = 'menor'
    const compara10 = soma > 10
    const compara20 = soma > 20

    if(compara10){
      result10 = 'maior'
    }

    if(compara20){
      result20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20`
  }


  console.log(compara(20, 20))