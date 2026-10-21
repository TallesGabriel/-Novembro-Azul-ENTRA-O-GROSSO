let peso = parseFloat (prompt("digite sua peso (Kg)"));
let altura = parseFloat (prompt("digite sua altura (m)"));

let resultado = CalcularIMC(peso, altura)
alert(resultado)
let IMC = resultado

function CalcularIMC (peso,altura) {
    return peso / (altura * altura)
}
 function ClassificarIMC () {
    if (IMC >=0; <10.5)
alert("Quer uma cesta básica amigo?")
    else if (IMC >=10.5; <18.5)
    alert("Alguém segura ali q o cara vai voar")
    else if (IMC >=19.5; <20)
    alert("Ta quaase uma pessoa")
    else if (IMC >=20; <21.5)
    alert("Ta safe")
    else if (IMC >= 21.5; < 25)
    alert("Esse come até o reboco das parede")
    else if (IMC >=25; <28.5)
    alert("N sabia q tava podeno criar elefante em casa")
    else if (IMC >=28.5; <30)
    alert("Se entrar na frente do sol a Terra congela")
    else if (IMC >30)
    alert("Gente achei o novo big bang!")
 }