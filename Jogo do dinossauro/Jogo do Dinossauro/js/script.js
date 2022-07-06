const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position = 0 // //Posição inicial do Dinossauro

document.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    if (!isJumping) {
      jump() //Se ele não tiver pulando, ele pula
    }
  }
})

//pular
function jump() {
  isJumping = true

  let upInterveal = setInterval(() => {
    //Até onde sobe
    if (position >= 150) {
      clearInterval(upInterveal)

      //descendo
      let downInterval = setInterval(() => {
        //Até onde desce
        if (position <= 0) {
          clearInterval(downInterval)
          isJumping = false
          //Descendo
        } else {
          position -= 20
          dino.style.bottom = position + 'px'
        }
      }, 20)
    } else {
      //subindo
      position += 20
      dino.style.bottom = position + 'px'
    }
  }, 20)
}

//Criar os cactus
function createCactus() {
  const cactus = document.createElement('div')
  let cactusPosition = 1000
  let randomTime = Math.random() * 6000 //Gerar cactus aleatorios

  cactus.classList.add('cactus')
  cactus.style.left = cactusPosition + 'px' //Posição do cactu
  background.appendChild(cactus) //Adicionar o cacatu ao background

  //movendo o cactu para a esquerda
  let leftInterval = setInterval(() => {
    if (createCactus < 60) {
      clearInterval(leftInterval)
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      //Game over
      clearInterval(leftInterval)
      document.body.innerHTML = '<h1 class = "game-over">Fim de Jogo</h1>'
    } else {
      cactusPosition -= 10
      cactus.style.left = cactusPosition + 'px'
    }
  }, 20)

  setTimeout(createCactus, randomTime) //Criar os cactus aleatórios na tela
}

createCactus()
