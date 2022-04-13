/*1- MAPS: Crie uma função que retorne o nome dos membros de um map que tem papel ADMIN no sistema.
  -Crie uma função getadmin que recebe map 
  -Crie um map e popule-o com nomes de usuários e seus papeis no sitesma
  -Dentro de getAdemin, utiize o loop for..of para retornar a lista com os nomes dos usuários que são adiministradores.*/

  function getAdmin(map){
    let admins = []
    for([key, value] of map){//Pega o valor e a propiedade do map
      if(value == 'Admin'){
        admins.push(key)
      }
    }
    return admins
  }

  const usuarios = new Map()

  usuarios.set('Luiz', 'Admin')
  usuarios.set('Pedro', 'Admin')
  usuarios.set('Fernando', 'Users')
  usuarios.set('Emanuel', 'Admin')

  console.log(getAdmin(usuarios))



  /*2- GET: Retorne outro array com valores únicos. */
  const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

  function valoresUnicos(array){
    const mySet = new Set(array)

      return [...mySet]//Precisa colocar o metodo para que o set faça parte de um array, e não fique como sum set.
  }
  console.log(valoresUnicos(meuArray))