console.log('Hello, TypeScript');
 // argumento a numero, b numero y el resultado es un numero
function add(a: number, b: number):number {
  return a + b;
}

const sum = add(2, 3);

/**tipos de variables
 * 
 * boolean*/

//let muted = false;
//or 
let muted : boolean = true; 
muted = false

//number

/**error al pasar un string en un campo numerico */

let age = 6
let numerador: number = 42
let denominador:number = age 
let resultado = numerador / denominador

//String

let nombre:string = 'Angel'

//Arreglos y tipos de Arreglos

let people:string[] =[]

people= ['isable','raul','angel']

//numeros y string

let peopleAndNumbers: Array< string | number > = []

peopleAndNumbers.push(9000)
peopleAndNumbers.push('9000')

//Enum

enum Color {
  Rojo,
  Verde,
  Azul,
}

let colorFavorito:Color = Color.Rojo //Rojo

console.log(`mi color favorito es ${colorFavorito}`) // 0

enum ColorNombre {
  Rojo = 'rojo',
  Verde = 'verde',
  Azul = 'azul'
}

let colorFavoritoNombre:ColorNombre = ColorNombre.Rojo //Rojo

console.log(`mi color favorito es ${colorFavoritoNombre}`) // rojo

//any toma todos los tipos. Tratar de usar este lo menos posible

const casa:any = true

//objeto

const carro:Object ={tipo:'4 puertas'}

//tipar funciones

function createAdder (a:number): (number)=> number{
  return  function(b:number) {
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(name:string, lastname:string = 'Barrios') {
  return `${name} ${lastname}`
}

// ?: quiere decir que es undefined 
// o se le puede agregar un valor por default
  
console.log(fullName('Angel')) // resultado con ?: = Angel
console.log(fullName('Angel')) // resultado con valor default = Angel Barrios

//interface

interface Rectangulo {
  ancho: number
  alto: number
}

let rectangle: Rectangulo = {
  ancho: 4,
  alto: 6
}

//caulcular el area del rectangulo 

function area(r:Rectangulo): number {
  return r.ancho * r.alto
}

const areaRect = area(rectangle)

console.log(areaRect)