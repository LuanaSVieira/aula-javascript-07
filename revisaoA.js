// 1)

var palavras1 = "Aprendendo";
var palavras = " strings em JavaScript";
var frase = palavras1 + palavras;

console.log(frase);

// 2)

var palavra1 = "palavra1";
var palavra2 = "palavra2";
var palavra3 = "palavra3";

var frase1 = "Esta é a frase com a ";
var frase2 = "Esta é a frase com a ";
var frase3 = "Esta é a frase com a ";

var resultado1 = frase1 + palavra1;
var resultado2 = frase2 + palavra2;
var resultado3 = frase3 + palavra3;

console.log(resultado1, resultado2, resultado3);

// 3)

let vetor = ["a", "b", "a", "a", "b", "c"];
console.log(vetor.sort());
console.log(vetor.reverse());