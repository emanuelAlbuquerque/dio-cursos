/*  1-Alunos Aprovados
    -Crie uma função que recebe o array e um numero que irá representar a média final
    -Pecorra o array e popule um novo array auxiliar com os alunos cujas notas são maiores ou iguais á média final.
    -Ultilize a tecnica "Object destructuind" para manipular as propiedades desejadas de caa aluno.*/

const alunos = [
  {
    nome: 'Emanuel',
    nota: 5,
    turma: '1B',
  },
  {
    nome: 'Ellen',
    nota: 10,
    turma: '1A',
  },
  {
    nome: 'Isabela',
    nota: 8,
    turma: '2A',
  },
  {
    nome: 'Laís',
    nota: 4,
    turma: '2A',
  },
  {
    nome: 'João',
    nota: 4,
    turma: '2A',
  }
]

function alunosAprovados(array, media){
  let aprovados = [];
  for(let i = 0; i < array.length; i++){

    const {nota, nome} = array[i] //Object Destruc...

    if(nota >= media){
      aprovados.push(nome)
      console.log(`${nome} Aprovado com nota ${nota}`)
    }else{
      console.log(`${nome} foi reprovado com nota ${nota}`)
    }
  }
}

console.log(alunosAprovados(alunos, 5))

/*2 - Dada da função calculeIdade, ultilize os metodos call e apply para modificar o valor de this. Crie seus propios objetos para esta atividade.*/

function calculaIdade(anos){
  return` Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  idade: 15
}

const pessoa2 = {
  nome: 'Emanuel',
  idade: 40
}

const pessoa3 = {
  nome: 'Zeca',
  idade: 15
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.apply(pessoa1, [20]))