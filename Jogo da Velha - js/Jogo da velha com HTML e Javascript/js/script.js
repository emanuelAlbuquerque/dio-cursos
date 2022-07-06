var jogador,
  vencedor = null
const jogadorSelecionado = document.getElementById('jogador-selecionado')
const vencedorSelecionado = document.getElementById('vencedor-selecionado')
const quadrados = document.getElementsByClassName('quadrado')

mudarJogador('X') //Chama a função mudarJogador , dando valor X

function escolherQuadrado(id) {
  const quadrado = document.getElementById(id)

  if (vencedor != null) {
    return
  } //Se ja tiver vencedor não executa mais nada

  if (quadrado.innerHTML != '.') {
    return
  } //Se o quadrado ja tiver um X ou O, não vai fazer mais nada para baixo.

  quadrado.innerHTML = jogador //Muda o conteúdo do quadrado para o valor de Jogador.
  quadrado.style.color = '#FFFAFA' //Muda a cor do quadrado.

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }
  mudarJogador(jogador)
  checaVencedor()
  empatado()
}

function mudarJogador(valor) {
  jogador = valor //Recebe X
  jogadorSelecionado.innerHTML = jogador //A tag jogador-selecionado no HTML vai receber o valor de jogador
}

function checaVencedor() {
  let quadrado1 = document.getElementById('1')
  let quadrado2 = document.getElementById('2')
  let quadrado3 = document.getElementById('3')
  let quadrado4 = document.getElementById('4')
  let quadrado5 = document.getElementById('5')
  let quadrado6 = document.getElementById('6')
  let quadrado7 = document.getElementById('7')
  let quadrado8 = document.getElementById('8')
  let quadrado9 = document.getElementById('9')

  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1)
    return
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4)
    return
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7)
    return
  }
  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1)
    return
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
    mudarVencedor(quadrado2)
    return
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
    mudarVencedor(quadrado3)
    return
  }
  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
    mudarVencedor(quadrado1)
    return
  }
  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7)
    mudarVencedor(quadrado3)
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML
  vencedorSelecionado.innerHTML = vencedor
} //Muda o vencerdor

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#0F0'
  quadrado2.style.background = '#0F0'
  quadrado3.style.background = '#0F0' //Muda a cor do quadrado
  quadrado1.style.color = '#000'
  quadrado2.style.color = '#000'
  quadrado3.style.color = '#000'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eigual = false

  if (
    quadrado1.innerHTML !== '.' &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    eigual = true
  }
  return eigual //Verifica se a sequência está correta
}

function reiniciar() {
  vencedor = null
  vencedorSelecionado.innerHTML = ''

  for (var i = 1; 1 <= 9; i++) {
    let quadrado = document.getElementById(i)
    quadrado.style.background = 'red'
    quadrado.style.color = 'red'
    quadrado.innerHTML = '.'
  }

  mudarJogador('X')
}

function empatado() {
  vencedorSelecionado.innerHTML = 'Empatado'
}
