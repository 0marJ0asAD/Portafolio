

/* Todo lo Aprendido de JavaScript*/

/* 01. El Uso de Variables */


const Tema1 = "01. El Uso de Variables";
console.log(Tema1);

//Variables tipos Var en JavaScript
var Nombre = 'Omar';

console.log(Nombre);

//Variables tuipo Let en JavaScript con Funciones incluidas.

function Saludo(){
    let Nombre = 'Joas';
        console.log(Nombre);
    let Edad = 23;
        console.log(Edad);
}

Saludo();

// Variables tipo Const, éstas son tipo "Destructivas"

const pi = 3.1416;
console.log(pi);

// pi = 15;

/* 02. Tipos de Datos especificos en JavaScript */

const Tema2 = "02. Tipos de Datos Especificos en JavaScript";
console.log(Tema2);

//Trabajar con Números en JavaScript

var Edad = 23;
console.log(Edad);
var Cantidad = "100";
console.log(Cantidad);
var NuevaCantidad = Number(Cantidad);
console.log(NuevaCantidad);
parseInt();
parseFloat();

// Trabajar con Cadenas de Texto o Strings.

var Bebida = "Agua";
console.log(Bebida);
var Comida = 'Ceviche';
console.log(Comida);
var Instrucción = `El Platillo se llama ${Comida}`;
console.log(Instrucción);
var Edad = 23;
console.log(Edad);
var EdadTXT = String(Edad);
console.log(EdadTXT);

// Uso de los Datos Booleanos

var Activo = true;
console.log(Activo);
var Estado = Boolean(10<9);
console.log(Estado);

// Trabajar con Fechas en JavaScript

var Fecha = new Date();
console.log(Fecha)

// Uso de Símbolos en JavaScript

var Simbolo1 = Symbol();
console.log(Simbolo1);
var Ambiente = Symbol('dev');
console.log(Ambiente);
var Simbolo2 = Symbol();
console.log(Simbolo1 == Simbolo2);

// Estructurando Datos con JSON => JavaScript Object Notation

var Persona = {Nombre: 'Omar', Twitter: 'RINT0RIN0'};

var PersonaJSON = JSON.stringify(Persona);
var NuevaPersona = JSON.parse(PersonaJSON);
console.log(NuevaPersona);

var Personas = [
    {Nombre: 'Sergio', Twitter: 'Yacafx'},
    {Nombre: 'Hugo', Twitter: 'dcHugo'},
    {Nombre: 'Paco', Twitter: 'dcLuis'},
    Persona
]
console.log(Personas)

/* 03. Uso de operadores en JavaScript */

const Tema3 = "03. Uso de Operadores en JavaScript";
console.log(Tema3);

/*Operadores Aritméticos en JavaScript*/

var DatoA = 10;
var DatoB = 20;

var DatoC = 40;
var DatoD = 30;

var DatoE = 50;
var DatoF = 50;

var DatoG = 10;
var DatoH = 10;

var DatoI = 30;
var DatoJ = 20;

// SUMA +:

var Suma = DatoA + DatoB;
console.log('La Suma de '+ DatoA +' + '+ DatoB +' Es igual a:', Suma);

// RESTA -:

var Resta = DatoC - DatoD;
console.log('La Resta de '+ DatoC +' - '+ DatoD +' Es igual a:', Resta);

// MULTIPLICACIÓN *:

var Multiplicación = DatoE * DatoF;
console.log('La Multiplicación de '+ DatoE +' x '+ DatoF +' Es igual a:', Multiplicación);

// DIVISIÓN /:

var División = DatoG / DatoH;
console.log('La División de '+ DatoG +' / '+ DatoH +' Es igual a:', División);

// RESIDUO O MÓDULO %:

var MóduloOResiduo = DatoI % DatoJ;
console.log('El Módulo o Residuo de '+ DatoI +' % '+ DatoJ +' Es igual a:', MóduloOResiduo);

// INCREMENTO ++:

var Incremento = DatoA;
Incremento++;
console.log('El Incremento++ de '+ DatoA +' Es igual a:', Incremento);

// INCREMENTO --:

var Decremento = DatoB;
Decremento--;
console.log('El Decremento-- de '+ DatoB +' Es igual a:', Decremento);

/* JavaScript y los Operadores Relacionales */

// MAYOR QUE >:

const DatoA1 = 20;
const DatoB1 = 10;
const DatoA2 = 10;
const DatoB2 = 20;
const MayorQue1 = DatoA1 > DatoB1;
const MayorQue2 = DatoA2 > DatoB2;
console.log('Es '+ DatoA1 +' (>) Mayor Que '+ DatoB1 +': ', MayorQue1);
console.log('Es '+ DatoA2 +' (>) Mayor Que '+ DatoB2 +': ', MayorQue2);

// MENOR QUE <:

const DatoC1 = 30;
const DatoD1 = 40;
const DatoC2 = 40;
const DatoD2 = 30;
const MenorQue1 = DatoC1 < DatoD1;
const MenorQue2 = DatoC2 < DatoD2;
console.log('Es '+ DatoC1 +' (<) Menor Que '+ DatoD1 +': ', MenorQue1);
console.log('Es '+ DatoC2 +' (<) Menor Que '+ DatoD2 +': ', MenorQue2);

// MAYOR O IGUAL QUE >=:

const DatoE1 = 50;
const DatoF1 = 50;
const DatoE2 = 49;
const DatoF2 = 50;
const MayorOIgualQue1 = DatoE1 >= DatoF1;
const MayorOIgualQue2 = DatoE2 >= DatoF2;
console.log('Es '+ DatoE1 +' (>=) Mayor o Igual Que '+ DatoF1 +': ', MayorOIgualQue1);
console.log('Es '+ DatoE2 +' (>=) Mayor o Igual Que '+ DatoF2 +': ', MayorOIgualQue2);

// MENOR O IGUAL QUE <=:

const DatoG1 = 50;
const DatoH1 = 50;
const DatoG2 = 51;
const DatoH2 = 50;
const MenorOIgualQue1 = DatoG1 <= DatoH1;
const MenorOIgualQue2 = DatoG2 <= DatoH2;
console.log('Es '+ DatoG1 +' (<=) Menor o Igual Que '+ DatoH1 +': ', MenorOIgualQue1);
console.log('Es '+ DatoG2 +' (<=) Menor o Igual Que '+ DatoH2 +': ', MenorOIgualQue2);

// IGUAL QUE ==:

const DatoI1 = 100;
const DatoJ1 = 100;
const DatoI2 = 99;
const DatoJ2 = 101;
const IgualQue1 = DatoI1 == DatoJ1;
const IgualQue2 = DatoI2 == DatoJ2;
console.log('Es '+ DatoI1 +' (==) Igual Que '+ DatoJ1 +': ', IgualQue1);
console.log('Es '+ DatoI2 +' (==) Igual Que '+ DatoJ2 +': ', IgualQue2);

// NO ES IGUAL QUE O ES DIFERENTE QUE !=:

const DatoL1 = 20;
const DatoN1 = 25;
const DatoL2 = 20;
const DatoN2 = 20;
const DiferenteOIgualQue1 = DatoL1 != DatoN1;
const DiferenteOIgualQue2 = DatoL2 != DatoN2;
console.log('Es '+ DatoL1 +' (!=) Diferente O Igual Que '+ DatoN1 +': ', DiferenteOIgualQue1);
console.log('Es '+ DatoL2 +' (!=) Diferente O Igual Que '+ DatoN2 +': ', DiferenteOIgualQue2);

/* Qué son los Operadores Lógicos dentro de JavaScript */

const DatoA3 = 10;
const DatoB3 = 20;

// Operador Lógico AND (Y, &&)

var AND = (DatoA3 > 10 && DatoB3 > 10);
console.log(`El Resultado de la Evaluación AND es: ${AND}`);

// Operador Lógico OR (O ||)

var OR = (DatoA3 > 10 || DatoB3 > 10);
console.log(`El Resultado de la Evaluación OR es: ${OR}`);

// Operador Lógico NOT (Negación ! [Es el signo de admiración cuando cierras una palabra o frase.])

var NOT1 = !(DatoA3 > 10);
console.log(`El Resultado de la primera Evaluación NOT es: ${NOT1}`);

var NOT2 = !(DatoB3 > 10);
console.log(`El Resultado de la segunda Evaluación NOT es: ${NOT2}`);

/* Como usar en JavaScript los Operadores de Asignación */

const DatoA4 = 10;

// ASIGNACIÓN SIMPLE

let Igual = DatoA;
console.log();

// SUMAR Y ASIGNAR



// RESTAR Y ASIGNAR



// MULTIPLICAR Y ASIGNAR



// DIVIDIR Y ASIGNAR



/* En que consiste el Operador Negativo */



// Operador de Concatenación en JavaScript



// Como trabaja en JavaScript el Operador de Tamaño o Condicional



// Operador de Tipo de Datos en JavaScript



/* 04. Uso de Condicionales o Decisiones en JavaScript */

const Tema4 = "04. Uso de Condicionales o Decisiones en JavaScript";
console.log(Tema4);

// JavaScript: Condición if



// Condición if-else JavaScript



//  Como usar en JavaScript la Condición if-else:



// Condiciones andadas con JavaScript



// JavaScript y la Estructura Switch



/* 05. Trabajar con Ciclos o Loops en JavaScript */

const Tema5 = "05. Trabajar con Ciclos o Loops en JavaScript";
console.log(Tema5);

// 



//



//



//



/* 06. Uso de Funciones o Métodos en JavaScript */

const Tema6 = "06. Uso de Funciones o Métodos en JavaScript";
console.log(Tema6);

// 



// 



// 



// 



// 



// 



//



//



//



/* 07. Trabajar con Eventos en JavaScript */

const Tema7 = "07. Trabajar con Eventos en JavaScript";
console.log(Tema7);

//



//



//



//



//



/* 08. Ventanas Emergentes o Cuadros de Díalogo en JavaScript */

const Tema8 = "08. Ventanas Emergentes o Cuadros de Diálogo en JavaScript";
console.log(Tema8);

// 



//



//



/* 09. Trabajar con Números en JavaScript */

const Tema9 = "09. Trabajar con Números en JavaScript";
console.log(Tema9);

// 



// 



// 

/*  */