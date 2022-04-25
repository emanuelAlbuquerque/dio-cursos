//Throw - Criamos um erro na string, no console ira aprenetar um erro.


function verifica(string){
  if(!string) throw "String Invalida"
  return string === string.split('').reverse().join('')
}

console.log(verifica('cat'))

//try...catch: manipula o erro.
function verifica(string){
  if(!string) throw "String Invalida"
  return string === string.split('').reverse().join('')
}
function tryCatch(string){
  try{
    verifica(string)
  }
  catch(e){
  console.log(e)
  }
}

console.log(tryCatch())

//Finally: Uma instrução que vai ser chamanda tendo erro ou não.
function verifica(string){
  if(!string) throw "String Invalida"
  return string === string.split('').reverse().join('')
}
function tryCatch(string){
  try{
    verifica(string)
  }
  catch(e){
  console.log(e)
  }
  finally{
    console.log('A string enviada foi: ' + string)
  }
}

console.log(tryCatch())


//Objeto erro

//manipulando erro

new Error(message, fileName, lineNumber);

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro

//Com nome

const MeuErro2 = new Error('Mensagem Inválida');
MeuErro2.name = "Erro de Emanuel"

throw MeuErro2