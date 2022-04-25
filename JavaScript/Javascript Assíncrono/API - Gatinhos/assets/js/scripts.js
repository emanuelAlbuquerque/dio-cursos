/*Atividade: API "catAPI"
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest/ para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!*/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
//recebe o endereço da API.
const catBtn = document.getElementById('change-cat')//Pega o ID do HTML
const catImg = document.getElementById('cat')//Pega o ID do HTML

const getCats = async() => {
  try{
    const data = await fetch(BASE_URL);//Pegar o que tem na API
    const json = await data.json(); //Tranfotma para json

    return json.webpurl;
  }catch(e){
    console.log(e.message)
  };
};

const loadImg = async() => {
  catImg.src = await getCats();//O ID da imagem no html vai receber a função getCats e carregar as imagens
};

catBtn.addEventListener('click', loadImg)//quando der um clique no botão vai carregar o loadImg e carregar as imagens passado.
loadImg();