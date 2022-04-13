//Função

function nome(parametros) {
  //Instruções
}

//Função Anônima
//Uma função sem nome dentro de uma variável.
const soma = function (a, b) {
  return a + b
}
soma(1, 2); // 3
soma(5,4);// 9

//Função autoinvocável
//Função declarada sem nome.
  (
  function () {
    let name = 'Digital Inovation One';
    return name;
  }
)();//Chama a função. Digital inovation one

//Com parametros.
  (
  function (a, b) {
    return a + b;
  }
)(1, 2); //Chama a função com os parametros 1+2

//Também pode ser colocada dentro da variávl
const soma3 = (function (a, b) {
  return a + b;
})(1, 2);
console.log(soma3);

//Calbacks
//Uma função qe serve de argumento para outra
const calc =  function(operacao, num1, num2){
  return operacao(num1, num2);
}

const adicao = function(num1, num2){
  return num1 + num2;
}

const sub = function(num1, num2){
  return num1 - num2;
}

const resultSoma = calc(adicao, 1, 2);
const resultSub = calc(sub, 1, 2);


//Objeto 'arguments'
function findMax(){
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++){
    //arguments serve para ver a lista de todos os parametros criados.
    if(arguments[i] > max);
    max = arguments[i];
    //se o argumento for maior que maximo, esse número será o novo máximo
  }
  return max;
}
console.log(findMax(1, 5, 7, 10));


//Arrays e Objetos

//Spread: 
function sum(x, y, z){
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
//sem os três pontos, ou seja, o spread, os elemntos iriam entrar só no "x" e com spread os elementos entram separadamente no x, y, z


//rest: 
function confereTamanho(...args)//Ver o tamanho do parametro
{
  console.log(args.length);
}

confereTamanho();// Tamanho 0
confereTamanho(1, 2);// Tamanho 2
confereTamanho(3, 4, 7);// Tamnaho 3


//Object

//Object Destructuring
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
function userId({id})//Pega apenas o id dentro do objeto
{
  return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}){
  return `${first} ${last}`
}

console.log(userId(user));
//42
console.log(getFullName(user));
//John Doe


//Loops

//if-else
//Escrever um código de três jeitos
//Primeira
function numeroPositivo(num){
  let resultado;

  if(num < 0){
    resultado = false;
  }else{
    resultado = true;
  }
  return resultado;
}

//segunda
function numeroPositivo(num){
  let resultado;

  const ehNegativo = num < 0;

  if(ehNegativo){
    resultado = false;
  }else{
    resultado = true;
  }
  return resultado;
}

//terceira
function numeroPositivo(num){
  const ehNegativo = num < 0

  if(ehNegativo){
    return false;
  }
  return true
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-1))


//for
function multiplicaPorDois(array){
  let multiplicados = [];
  //Array vazio

  for(let i = 0; i < array.length; i++){
    multiplicados.push(array[i] * 2);
  }
  return multiplicados
  //Multiplicar os valores de cada indice por dois.
}
const meusNumeros = [2, 6, 9, 5, 5]
console.log(multiplicaPorDois(meusNumeros));


//for-in - Mais usados em objetos.
function forInExemplo(obj){
  for(prop in obj){
    console.log(prop)
  }//O prop mostra mostra cada propiedade dentro daquele objeto.
}
const meuObjeto = {
  nome: 'João',
  idade: '20',
  cidade: 'Salvador'
}
console.log(forInExemplo(meuObjeto))

//Acessando as propiedades.
function forInExemplo1(obj){
  for(prop in obj){
    console.log(obj[prop])
  }//Assim acessa e mostra os valores nas propiedades.
}
const meuObjeto1 = {
  nome: 'João',
  idade: '20',
  cidade: 'Salvador'
}
console.log(forInExemplo1(meuObjeto1))

//for-of
function logLetras(palavra){
  for(letra of palavra)
  //Mostra as letras da palavra.
  {
    console.log(letra);
  }
}
const palavra = "abacaxi"
console.log(logLetras(palavra))



function logNumeros(numero){
  for(num of numero)
  //Mostra os numeros.
  {
    console.log(numero);
  }
}
const numero = [20, 50, 47, 11, 66]
console.log(logNumeros(numero))


//THIS

const pessoa = {
  primNome: 'André',
  ultiNome: 'Soarés',
  idade: 20,
  NomeCompleto: function(){
    return this.primNome + " " + this.ultiNome
  },//Quando tiver uma função dentro de um objeto vai se chamar de método, e quando colocamos o this, ele refere-se ao pai desse objeto, que no exemplo é "pessoa"
  getIdade: function(){
    return this.idade;
  }
};

console.log(pessoa.NomeCompleto());
console.log(pessoa.getIdade())


//Manipulando seu valor.

//call
const nomePessoa = {
  nome: 'Emanuel' 
}
const nameAnimal = {
  nomeAnimal: 'Suzi'
}
function getSomething(){
  console.log(this.nome)
}
console.log(getSomething.call(nomePessoa))
//Quando colocamos o call mostramos o objeto no qual queremos que o this se refira, no caso do exemplo está se referindo a nomePesso.

//Com agumentos
const myObj = {
  num5: 5,
  num4: 3,
};

function soma1(a,b){
  console.log(this.num5 + this.num4 + a + b);
}

console.log(soma.call(myObj, 1, 5))
//Quero que se refira ao myObj e coloque os valores 1 e 5 em num5 e em num4


//Apply

//Tem o mosmo funcionamnto que o call, a única diferença é na hora de passar argumento, será passado argumentos dentro de um array.
const meuObj = {
  num6: 5,
  num7: 3,
};

function soma2(a,b){
  console.log(this.num6 + this.num7 + a + b);
}

console.log(soma.apply(meuObj, [9, 7]))
//Os valores são passados em um array.


//bind

const retornaNome = function(){
  return this.nome;
};
let bruno = retornaNome.bind({nome: 'Bruno'});
//Clona a função retornaNomes e passa ela para a variável bruno. E com o this colocamos o "Bruno" dentro do nome da função.
console.log(bruno());


//Arrow Function

//Sem mosificação
const helloWord1 = function(){
  return "Hello word"
}

//Arrow function
const helloWord2 = () => {
  return "hello word"
}

const helloWord3 = () => "Hello word"

const soma5 = (a, b) => a + b;
console.log(soma(4,6))

const soma4 = a => a
console.log(soma4(4))
