/*Atividade: 
-Light Mode/Dark Mode
-Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
-Copie o HTML e o CSS deste repositório
-Crie um arquivo chamado scripts.js na sua pasta assets/js
-Selecione os elementos: h1, button, footer e body
-Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original */

//Modificar os modos
function changeMode(){
  changeClasses()
  changeText()
}

//Modificar as classes 
function changeClasses(){
  button.classList.toggle(darkModeClass) //Se não existir a class dark-mode ele irá criar, se existir ele irá apagar.
  h1.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
}

//Modificar os textos
function changeText(){
  const lightMode = "Light Mode"
  const darkMode = "Dark Mode"

  if(body.classList.contains/*Olha tudo oq tem dentro da tag 
  body*/ (darkModeClass)){
  button.innerHTML = lightMode;//Modifica o texto no HTML
  h1.innerHTML = darkMode + " ON"
  return
  }//Se dentro de body existe, execulta

  //Volta ao normal
  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON"
}


//Pegar os elementos do HTML
const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector') 
const h1 = document.getElementById('page-title') 
const body = document.getElementsByTagName('body')[0]//Precisa colocar o index, pois ira retornar um array, e o index aonde está o html é o 0
const footer = document.getElementsByTagName('footer')[0]


//Chamar a função com um clique
button.addEventListener('click', changeMode)