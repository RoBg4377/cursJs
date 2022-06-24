//devuelve el estring dado pero al revés
function reverseString(str) {
let reves = '';
for(let i = str.length-1; i >= 0; i--){
  reves = reves + str[i]
}
return reves;
}

//devuelve el factorial de un número
function factorialize(num) {
let fact = 1;
for(let i = 1; i <= num; i++){
  fact *= i
}
return fact;
}

// devuelve el numero de letras de la palabra más grande de la oración
function findLongestWordLength(str) {
let result = []
let regEx = /\w+/ig;
for(let i = 0; i < str.match(regEx).length; i++){
  result.push(str.match(regEx)[i].length)
}
return Math.max(...result)
}

// Devuelve un arreglo con los numeros mayores de los sub-arreglos
function largestOfFour(arr) {
let arr2=[];
for(let i = 0; i < arr.length; i++){
  arr2.push(Math.max(...arr[i]))
}
return arr2
}

// devuelve verdadero si la cadena (str) termina con (target)
function confirmEnding(str, target) {
return str.slice(str.length-(target.length)) == target;
}
//otra forma de hacer lo mismo
function confirmEnding(str, target) {
let regEx = new RegExp(target +'$')
return regEx.test(str)
}

// devuelve una repeticion de (str) la cantidad de veces dada por (num)
function repeatStringNumTimes(str, num) {
let cadena =""
  for(let i=0; i < num; i++){
  cadena+=str
  }
  return cadena
}

// devuelve el string (str) cortado según el tamaño que determine (num) si (num) es => al tamaño del (str) devuelve el string//
function truncateString(str, num) {
  if (num < str.length){
    return str.slice(0, num) + '...';
  } else {
    return str;
  }  
}

//recorre el arreglo (arr) y devuelve el primer elemento que sea true para la función (func)
function findElement(arr, func) {
  let num;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i]
    } 
  }
}

// devuelve el string con la primera letra de cada palabra en mayúscula
function titleCase(str) {
  let regEx = /^\w|\s\w|/g;
  return  str.toLowerCase().replace(regEx, (i) => i.toUpperCase())
}

//devuelve verdadero si el valor pasado es un booleano
function booWho(bool) {
  return typeof bool === 'boolean';
}

// devuelve un arreglo sin ningun valor vacío.
function bouncer(arr) {
  let nArr = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i]){
      nArr.push(arr[i])
    }
  }
  return nArr
}

// devuelve el índice que tendría (num) si se incertara en (arr) y arr estuviera ordenado de menor a mayor
function getIndexToIns(arr, num) {
  let nArr = arr.sort((a, b) => a-b)
  let count = 0;
  for(let i =0; i < arr.length; i++){
    if(num <= nArr[i]){
      return i
    }
  }
  return arr.length
}

// compara el segundo string con el primer string del arreglo (arr) y devuelve verdadero si contiene las mismas letras.
function mutation(arr){
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for(let i = 0; i < str2.length; i++){
    if(str1.indexOf(str2[i]) < 0) {
      return false
    }
  }
return true
}

// devuelve, a partir de un arreglo (arr), un arreglo bidimensional con la cantidad de subarreglos que determine (size) que sería la cantidad de elementos de ese sub arreglo.
function chunkArrayInGroups(arr, size) {
  let nArr = [];
  for(let i = 0; i < arr.length; i+= size){
    nArr.push(arr.slice(i, i + size))
  }
  
  return nArr
}
