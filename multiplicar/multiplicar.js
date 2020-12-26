const fs = require('fs');
const colors = require('colors')


let listarTabla = (base, limite = 10) => {
  for (let i = 1; i <= limite; i++){
    console.log(`${base} * ${i} = ${base * i}`.green)
  }
}


let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`Valor introducudo "${base}" no es un numero`.red)
      return
  }

    let data = ''
    
    for (let i = 1; i <= limite; i++){
      data +=`${base} * ${i} = ${base * i}\n`
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
      if (err)
        reject(err);
      else resolve(`tabla-${base}.txt`)
      // console.log('File has been saved!');
    });
  })
}

module.exports = {
  crearArchivo,
  listarTabla
}