let order = [] //Ordens do jogo
let clickOrder = [] //Ordens dos nossos cliques
let score = 0 //Pontos

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Cria a oredem aleatória
let shuffleOrder = () => {
  let colorOrder = Math.floor(
    /*Para arredondar os valores*/ Math.random() *
      4 /*Pq sempre sortei um número de 0 a 3*/
  )
  order[order.length] = colorOrder //Equeivale o indece do array com o número aleatório que sair
  clickOrder = []

  for (let i in order) {
    let elementColor = creatColorElement(order[i]) //Enquanto ele rodar o i vai ser o indice do array
    lightColor(elementColor, Number(i) + 1)
  }
}

//Ascende a próxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('select')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('select')
  }) //Adicionar e remover a class selected
}

//Checa se os botões são os mesmos das ordens
let checkOrder = () => {
  for (let i in clickOrder) {
    if (clickOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
  if (clickOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando Próximo Nível`)
    nextLevel()
  }
}

//Função para o clique do usuario
let click = color => {
  clickOrder[clickOrder.length] = color //O array na posição qu foi clicado vai reber a cor que atribuiu
  creatColorElement(color).classList.add('select')
  setTimeout(() => {
    creatColorElement(color).classList.remove('select')
    checkOrder() //Verifica e oq a gente clicou foi o que o jogo pediu para a gente.
  }, 250)
}

//Criar a função que retorna a cor
let creatColorElement = color => {
  if (color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

//Função para próximo nivel do jogo
let nextLevel = () => {
  score++ //Aumenta os pontos
  shuffleOrder() //Função para nova ordem
}

//Função para game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para começar um novo jogo`
  )
  order = []
  clickOrder = []
  playGame()
}

//Inicio de jogo
let playGame = () => {
  alert('Bem vindo ao Gênises! Iniciando novo jogo')
  score = 0

  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()
