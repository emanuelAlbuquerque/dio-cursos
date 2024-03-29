/*Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

-Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
-Dentro de ContaBancaria, construa o getter e o setter de saldo;
-Dentro de ContaBancaria, crie os métodos sacar e depositar;
-Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
-Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
-Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
-Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
-Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
-Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
  constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this._saldo = 0
    this.tipo = tipo;
  }//Criei a class com o contructor.

  get saldo(){
    return this._saldo
  }
  set saldo(valor){
    return this._saldo
  }//Criando o get e o set do valor do saldo
  //Quando ultilizar o get e o set é preciso ultilizar o underline na frente do nome.

  sacar(valor){
    if(valor > this._saldo){
      //Se o valor que quer sacar for maior que o saldo da conta, vai ser negado
      return "Operação negada"
    }
    this._saldo = this._saldo - valor;

    return this._saldo
  }

  depositar(valor){
    this._saldo = this._saldo + valor;

    return this._saldo
  }
  //Criamos o sacar e depositar.
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito){
    super(agencia, numero)//Pega os valores e manda para classe pai
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito(){
    return this._cartaoCredito;
  }
  set cartaoCredito(valor){
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero)//Pega os valores e manda para classe pai
    this.tipo = 'poupança'

  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia, numero)//Pega os valores e manda para classe pai
    this.tipo = 'universitária'
  }

  sacar(valor){
    if(valor > 500){
      return "Operação negada"
    }
    this._saldo = this._saldo - valor;
  }//Só pode sacar se for até 500 reais
}