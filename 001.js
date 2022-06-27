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

console.log(Object.prototype.isPrototypeOf(Perro))
console.log(Object.prototype.isPrototypeOf(Perro.prototype))
console.log(Object.prototype.isPrototypeOf(bulldog))
console.log(Perro.prototype.isPrototypeOf(bulldog))


console.log(Perro.prototype.isPrototypeOf(dogo))

function Animal(){
  //sin propiedades (solo prototype)
}
Animal.prototype = {
  constructor: Animal, // par referir constructor a animal
  comer: function() { return 'ñam ñam'}
}

function Perro (nombre, color){
  let nom = nombre; // se hace privada la propiedad
  this.color= color;
  this.suNombre = function () {// closure
    return nom
  }
}


Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.patas = 4
Perro.prototype.ladrar = function () {return 'guau guau'},
Perro.prototype.chapa = function () { return 'el perro se llama: ' + this.nombre + '.'}
Perro.prototype.constructor = Perro

let caniche = new Perro('Lalo', 'café')



console.log(caniche.comer())

Perro.prototype.comer = function() { return 'rico rico'}


let dueñoMixin = function(obj) {
  obj.dueño = function() {
    return 'Ricardo'
  }
}

let dueñaMixin = function(obj) {
  obj.dueña = function() {
    return 'Martina'
  }
}

let dueñosModule = (function(){
  return {
    dueñoMixin: function(obj) {
      obj.dueño = function() {
        return 'Ricardo'
      };
    },
    dueñaMixin: function(obj) {
      obj.dueña = function() {
        return 'Martina'
      };
    }
  }
})()

dueñosModule.dueñoMixin(caniche);
dueñosModule.dueñaMixin(caniche);

console.log(caniche.dueño());
console.log(caniche.dueña())


 console.log(caniche)

dueñoMixin(caniche)
console.log(caniche.dueño())

console.log(caniche.suNombre())

console.log(caniche.color)
console.log(caniche.patas)
console.log(caniche.comer())
console.log(caniche.ladrar())
console.log(caniche.chapa())

 console.log(caniche.nombre)
 caniche.nombre = 'Ernesto';
 console.log(caniche.nombre)



