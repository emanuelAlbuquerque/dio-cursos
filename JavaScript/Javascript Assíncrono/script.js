//Promises
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('resolvida'));
  }, 2000);
});

//Async - await
//É preciso colocr o Async para criar promises na função.
async function resolvePromise(){
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(console.log('resolvida'));
    }, 3000);
  });

  //await serve para fazer a manipulação.
  const resolved = await myPromise
        .then((result) => result + "Passando pelo then");
        .then((result) => result + "E agora acabou");
        .catch((err) => console.log(err.message));
      
        return resolved;
}

//Com try catch
async function resolvePromise(){
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(console.log('resolvida'));
    }, 3000);
  });

  let result;

  try{
    result = await myPromise
          .then((result) => result + 'passando pelo then')
          .then((result) => result + 'E agora acabou')
  }catch(err){
    result = err.message
  }

  return result

}

//Fetch
//Ele sempre retorna uma promise, e por isso tem que usar o await, e também sempre tranformar para json.
fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))


  //Operações no banco(POST, GET, PUT, DELETE, etc)

  //GET
  fetch(/* url da API*/ , {
    method: 'GET',
    cache: 'no-cache'
  })
  .then(response => response.json())
  .then(json => console.log(json))


  //POST
  fetch(/* url da API*/ , {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
    //No post precisa converter o json para uma string
  })
  .then(response => response.json())
  .then(json => console.log(json))