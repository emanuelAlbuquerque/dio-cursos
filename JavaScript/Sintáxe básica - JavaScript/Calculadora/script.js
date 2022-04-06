function calculadora() {
  const operacao = prompt(
    'Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'
  ) //Mostra na tela um alerta que recebe uma entrada do usuário.

  //se ele digitar um valor diferente das opções, ira retornar para as opções.
  if (!operacao || operacao >= 7) {
    alert('Erro - operação Invalida')
    calculadora()
  } else {
    //É preciso declarar o number para oas valores se converter em número.
    let n1 = Number(prompt('Insira o primeiro valor: '))
    let n2 = Number(prompt('Insira o segundo valor: '))
    let resultado

    //criou uma varificação para os valores das variáveis, caso não seja um número ira retornar para calculadora, se for números ira formar as funções.
    if (!n1 || !n2) {
      alert('Erro - opções invalidas')
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
      }

      function subtracao() {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
      }

      function mutiplicacao() {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
      }

      function divisaoReal() {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
      }

      function divisaoInteira() {
        resultado = n1 % n2
        alert(` O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
      }

      function potenciacao() {
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual á  ${resultado}`)
        novaOperacao()
      }

      function novaOperacao() {
        let opcao = prompt(
          'Deseja fazer alguma outra operação?\n 1 - Sim\n 2 - Não'
        )
        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('Até mais')
        } else {
          alert('Digite uma opcão valida')
          novaOperacaoa()
          //Se ele digitar 1 a função vai chmar a função calculadora e fazer a operação.
        }
      }
    }

    /*if (operacao == 1) {
      soma()
    } else if (operacao == 2) {
      subtracao()
    } else if (operacao == 3) {
      mutiplicacao()
    } else if (operacao == 4) {
      divisaoReal()
    } else if (operacao == 5) {
      divisaoInteira()
    } else {
      potenciacao()
    }
    */

    switch (operacao) {
      case 1:
        soma()
        break
      case 2:
        subtracao()
        break
      case 3:
        mutiplicacao()
        break
      case 4:
        divisaoReal()
        break
      case 5:
        divisaoInteira()
        break
      case 6:
        potenciacao()
        break
    }
  }
}

calculadora()
