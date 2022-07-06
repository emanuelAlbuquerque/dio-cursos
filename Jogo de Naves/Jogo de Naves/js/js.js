function start() {
  // Inicio da função start()

  $('#inicio').hide() //Ocutar a div com id inicio.

  $('#fundoGame').append("<div id='jogador' class='anima1'></div>")
  $('#fundoGame').append("<div id='inimigo1' class='anima2'></div>")
  $('#fundoGame').append("<div id='inimigo2'></div>")
  $('#fundoGame').append("<div id='amigo' class='anima3'></div>")
  $('#fundoGame').append("<div id='placar'></div>")
  $('#fundoGame').append("<div id='energia'></div>")
  //Criando novas divs com o append dentro do fundo game

  //Principais variáveis do jogo

  //variaveis de audio
  var somDisparo = document.getElementById('somDisparo')
  var somExplosao = document.getElementById('somExplosao')
  var musica = document.getElementById('musica')
  var somGameover = document.getElementById('somGameover')
  var somPerdido = document.getElementById('somPerdido')
  var somResgate = document.getElementById('somResgate')
  //Música em loop
  musica.addEventListener(
    'ended',
    function () {
      musica.currentTime = 0
      musica.play()
    },
    false
  ) //Quando chegar ao fim da música ela é tocada novamente

  musica.play()

  var velocidade = 5
  var pontos = 0
  var salvos = 0
  var perdidos = 0
  var energiaAtual = 3
  var posicaoY = parseInt(Math.random() * 334) //Valor randomico para a movimentação do inimigo
  var podeAtirar = true //Ele começa podendo atirar
  var fimdejogo = false
  var jogo = {}
  var TECLA = {
    W: 87,
    S: 83,
    ENTER: 13
  }
  jogo.pressionou = []

  //Verifica se o usuário pressionou alguma tecla
  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true
  }) //Se precionou o valor passa a ser true

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false
  }) //Se não precionou passa a ser false.

  //Game Loop
  jogo.timer = setInterval(loop, 30)
  //Cria um timer dentro de jogo e a cada 30 segundos a função loop é chamada.

  function loop() {
    movefundo()
    movejogador()
    moveinimigo1()
    moveinimigo2()
    moveamigo()
    colisao()
    placar()
    energia()
  } // Fim da função loop()

  //Função que movimenta o fundo do jogo
  function movefundo() {
    esquerda = parseInt($('#fundoGame').css('background-position')) //Tranforma os valores do css em números.
    $('#fundoGame').css('background-position', esquerda - 1) //Move um pixel para a esquerda a cada 30 milisegundos.
  } // fim da função movefundo()

  function movejogador() {
    if (jogo.pressionou[TECLA.W]) {
      var topo = parseInt($('#jogador').css('top'))
      $('#jogador').css('top', topo - 10)
      //Andar para cima
      if (topo <= 0) {
        $('#jogador').css('top', topo + 10)
        //Se o helicópitero chegar no limite da div  em cima ele desce 10px e não ´passa da div
      }
    }

    if (jogo.pressionou[TECLA.S]) {
      var topo = parseInt($('#jogador').css('top'))
      $('#jogador').css('top', topo + 10)
      //Andar para baixo
      if (topo >= 420) {
        $('#jogador').css('top', topo - 10)
        //Se o helicópitero chegar no limite da div  em baixo ele sobe 10px e não ´passa da div
      }
    }
    if (jogo.pressionou[TECLA.ENTER]) {
      //Chama função Disparo
      disparo()
    }
  } // fim da função movejogador()

  function moveinimigo1() {
    posicaoX = parseInt($('#inimigo1').css('left'))
    $('#inimigo1').css('left', posicaoX - velocidade)
    $('#inimigo1').css('top', posicaoY)

    if (posicaoX <= 0) {
      posicaoY = parseInt(Math.random() * 334) //Mudar a posição do inimigo
      $('#inimigo1').css('left', 694)
      $('#inimigo1').css('top', posicaoY)
    }
  } //Fim da função moveinimigo1()

  function moveinimigo2() {
    posicaoX = parseInt($('#inimigo2').css('left'))
    $('#inimigo2').css('left', posicaoX - 3) //Move para a esquerda

    if (posicaoX <= 0) {
      $('#inimigo2').css('left', 775)
    }
  } // Fim da função moveinimigo2()

  //OBS: Quando aumentamos o left ele vai para a direita, quando diminuimos ele vai para a esquerda.

  function moveamigo() {
    posicaoX = parseInt($('#amigo').css('left'))
    $('#amigo').css('left', posicaoX + 1) //Move para a direita

    if (posicaoX > 906) {
      $('#amigo').css('left', 0)
    }
  } // fim da função moveamigo()

  function disparo() {
    if (podeAtirar == true) {
      somDisparo.play()
      podeAtirar = false //Não pode excultar um novo tiro enquanto a função está em andamento

      //Posição da saída do disparo
      topo = parseInt($('#jogador').css('top'))
      posicaoX = parseInt($('#jogador').css('left'))
      tiroX = posicaoX + 135 //Vai caminhar para a direita do helicoptero.
      topoTiro = topo + 40 //Vai para baixo do helicoptero
      $('#fundoGame').append("<div id='disparo'></div") //Criando a div disparo
      $('#disparo').css('top', topoTiro) //Posicionando a div.
      $('#disparo').css('left', tiroX) //Posicionando a div.

      var tempoDisparo = window.setInterval(executaDisparo, 30)
    } //Fecha podeAtirar

    function executaDisparo() {
      //Tempo de disparo
      posicaoX = parseInt($('#disparo').css('left')) //Pega a posição inicial do disparo
      $('#disparo').css('left', posicaoX + 15) //Faz caminhar 15 em 15 para a direita, aumentando o left

      if (posicaoX > 900) {
        window.clearInterval(tempoDisparo) //Remove a variável de tempo
        tempoDisparo = null //Da valor de null na variável
        $('#disparo').remove() //Remove o disparo
        podeAtirar = true //Usuário pode atirar de novo
      }
    } // Fecha executaDisparo()
  } // Fecha disparo()

  function colisao() {
    var colisao1 = $('#jogador').collision($('#inimigo1'))
    // jogador com o inimigo1, identifica a colisão entre
    var colisao2 = $('#jogador').collision($('#inimigo2'))
    var colisao3 = $('#disparo').collision($('#inimigo1'))
    var colisao4 = $('#disparo').collision($('#inimigo2'))
    var colisao5 = $('#jogador').collision($('#amigo'))
    var colisao6 = $('#inimigo2').collision($('#amigo'))

    if (colisao1.length > 0) {
      velocidade = velocidade + 0.9
      energiaAtual--
      inimigo1X = parseInt($('#inimigo1').css('left'))
      inimigo1Y = parseInt($('#inimigo1').css('top')) //Pega a posição atual do inimigo
      explosao1(inimigo1X, inimigo1Y)
      //Chama a função da explosão com os valores da posição atual do inimigo

      posicaoY = parseInt(Math.random() * 334)
      $('#inimigo1').css('left', 694)
      $('#inimigo1').css('top', posicaoY)
      //Quando houver colisão vi reposicionar o inimigo.
    }

    // jogador com o inimigo2
    if (colisao2.length > 0) {
      velocidade = velocidade + 0.3
      energiaAtual-- //Quando houver colisão diminui uma energia
      inimigo2X = parseInt($('#inimigo2').css('left'))
      inimigo2Y = parseInt($('#inimigo2').css('top'))
      explosao2(inimigo2X, inimigo2Y)

      $('#inimigo2').remove() //Remover inimigo 2

      reposicionaInimigo2() //Reposicionar
    }

    // Disparo com o inimigo1

    if (colisao3.length > 0) {
      velocidade = velocidade + 0.3 //Aumenta a velocidade a cada colisão
      pontos = pontos + 100
      inimigo1X = parseInt($('#inimigo1').css('left'))
      inimigo1Y = parseInt($('#inimigo1').css('top'))

      explosao1(inimigo1X, inimigo1Y)
      $('#disparo').css('left', 950) //Reposiciona o disparo

      posicaoY = parseInt(Math.random() * 334)
      $('#inimigo1').css('left', 694)
      $('#inimigo1').css('top', posicaoY)
      //Reposiciona o inimigo
    }

    // Disparo com o inimigo2

    if (colisao4.length > 0) {
      pontos = pontos + 50
      inimigo2X = parseInt($('#inimigo2').css('left'))
      inimigo2Y = parseInt($('#inimigo2').css('top'))
      $('#inimigo2').remove()

      explosao2(inimigo2X, inimigo2Y)
      $('#disparo').css('left', 950)

      reposicionaInimigo2()
    }

    // jogador com o amigo

    if (colisao5.length > 0) {
      somResgate.play()
      salvos++
      reposicionaAmigo()
      $('#amigo').remove() //Remove o Amigo
    }

    //Inimigo2 com o amigo

    if (colisao6.length > 0) {
      somPerdido.play()
      perdidos++
      amigoX = parseInt($('#amigo').css('left'))
      amigoY = parseInt($('#amigo').css('top'))
      explosao3(amigoX, amigoY)
      $('#amigo').remove()

      reposicionaAmigo()
    }
  } //Fim da função colisao()

  //Explosão 1
  function explosao1(inimigo1X, inimigo1Y) {
    somExplosao.play()
    $('#fundoGame').append("<div id='explosao1'></div") //Cria no fundoGame uma div explosão1
    $('#explosao1').css('background-image', 'url(imgs/explosao.png)') //Da uma imagem de background para a explosão um
    var div = $('#explosao1')
    div.css('top', inimigo1Y) //Lugar da explosão
    div.css('left', inimigo1X)
    div.animate({ width: 200, opacity: 0 }, 'slow')
    //A div vai até 200 de tamanho e vai diminuindo a opacidade até chegar a 0, devagar

    var tempoExplosao = window.setInterval(removeExplosao, 1000) //Remove a explosão em 1 segundo

    function removeExplosao() {
      div.remove() //Remove a div
      window.clearInterval(tempoExplosao) //Remove tempo explosão
      tempoExplosao = null
    }
  } // Fim da função explosao1()

  //Reposiciona Inimigo2

  function reposicionaInimigo2() {
    var tempoColisao4 = window.setInterval(reposiciona4, 5000) //Apos 5 segundos ele é recriado

    function reposiciona4() {
      window.clearInterval(tempoColisao4) //Remove o tempo
      tempoColisao4 = null

      if (fimdejogo == false) {
        $('#fundoGame').append('<div id=inimigo2></div') //Se o jogo acabar não irá receber
      }
    }
  }

  //Reposiciona Amigo

  function reposicionaAmigo() {
    var tempoAmigo = window.setInterval(reposiciona6, 6000)

    function reposiciona6() {
      window.clearInterval(tempoAmigo)
      tempoAmigo = null

      if (fimdejogo == false) {
        $('#fundoGame').append("<div id='amigo' class='anima3'></div>")
      }
    }
  } // Fim da função reposicionaAmigo()

  //Explosão2

  function explosao2(inimigo2X, inimigo2Y) {
    somExplosao.play()
    $('#fundoGame').append("<div id='explosao2'></div")
    $('#explosao2').css('background-image', 'url(imgs/explosao.png)')
    var div2 = $('#explosao2')
    div2.css('top', inimigo2Y)
    div2.css('left', inimigo2X)
    div2.animate({ width: 200, opacity: 0 }, 'slow')

    var tempoExplosao2 = window.setInterval(removeExplosao2, 1000)

    function removeExplosao2() {
      div2.remove()
      window.clearInterval(tempoExplosao2)
      tempoExplosao2 = null
    }
  } // Fim da função explosao2()

  //Explosão3

  function explosao3(amigoX, amigoY) {
    $('#fundoGame').append("<div id='explosao3' class='anima4'></div")
    $('#explosao3').css('top', amigoY)
    $('#explosao3').css('left', amigoX)

    var tempoExplosao3 = window.setInterval(resetaExplosao3, 1000)

    function resetaExplosao3() {
      $('#explosao3').remove()
      window.clearInterval(tempoExplosao3)
      tempoExplosao3 = null
    }
  } // Fim da função explosao3

  function placar() {
    $('#placar').html(
      '<h2> Pontos: ' +
        pontos +
        ' Salvos: ' +
        salvos +
        ' Perdidos: ' +
        perdidos +
        '</h2>'
    )
  } //fim da função placar()

  //Barra de energia

  function energia() {
    if (energiaAtual == 3) {
      $('#energia').css('background-image', 'url(imgs/energia3.png)')
    }

    if (energiaAtual == 2) {
      $('#energia').css('background-image', 'url(imgs/energia2.png)')
    }

    if (energiaAtual == 1) {
      $('#energia').css('background-image', 'url(imgs/energia1.png)')
    }

    if (energiaAtual == 0) {
      $('#energia').css('background-image', 'url(imgs/energia0.png)')

      //Game
      gameOver()
    }
  } // Fim da função energia()

  //Função GAME OVER
  function gameOver() {
    fimdejogo = true //Muda de false para true
    musica.pause() //para a musica
    somGameover.play() //Cria a música gameover

    window.clearInterval(jogo.timer) //acaba com o game loop, apaga com a variavel de loop
    jogo.timer = null

    $('#jogador').remove() //Remove jogador
    $('#inimigo1').remove() //Remove inimigo 1
    $('#inimigo2').remove() //Remove inimigo 2
    $('#amigo').remove() //Remove amigo
    $('#placar').remove()
    $('#energia').remove()

    $('#fundoGame').append("<div id='fim'></div>") //Cria uma div fim

    $('#fim').html(
      '<h1> Game Over </h1><p>Sua pontuação foi: ' +
        pontos +
        '<br> E o total de amigos salvos foi: ' +
        salvos +
        '</p>' +
        "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>"
    ) //Insere na div os resultados.
  } // Fim da função gameOver();
}

//Reinicia o Jogo

function reiniciaJogo() {
  somGameover.pause() //Para o som game over
  $('#fim').remove() //Apaga a div fim
  start() //Inicia novamente a função start
} //Fim da função reiniciaJogo
