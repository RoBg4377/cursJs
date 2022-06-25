console.log('Bienvenido')



let dogo = {
  nombre: 'Yucon',
  patas: 4,
  chapa : function () {return 'el perro se llama ' + this.nombre} 
}
console.log(dogo.nombre)
console.log(dogo.patas)
console.log(dogo.chapa())



function Perro (nombre, color){
  this.nombre = nombre;
  this.color= color;
}

Perro.prototype = {
  constructor: Perro,
  patas: 4,
  ladrar: function () {return 'guau guau'},
  chapa:  function () { return 'el perro se llama: ' + this.nombre + '.'}
}

let bulldog = new Perro('Coqui', 'blanco');



console.log(bulldog.nombre)
console.log(bulldog.color)
console.log(bulldog.patas)
console.log(bulldog.ladrar())
console.log(bulldog.chapa())





function propiedadesDirectas(objeto){
  let propDirec = [];
  for(let propiedad in objeto){
    if(objeto.hasOwnProperty(propiedad)){
      propDirec.push(propiedad)
    }
  }
  return propDirec
}

console.log(bulldog.patas)
console.log(bulldog.hasOwnProperty('patas'))
console.log(propiedadesDirectas(bulldog))

console.log(bulldog.constructor === Perro)

function perrosDePerro(perro) {
  return perro.constructor === Perro;
}
console.log(perrosDePerro(bulldog))

console.log(Perro.prototype.isPrototypeOf(bulldog))
console.log(Perro.prototype.isPrototypeOf(dogo))






