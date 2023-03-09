var altura = [1.75, 1.90, 1.72, 1.76, 1.52, 1.74, 1.82, 2.00, 1.67, 1.58, 1.78, 1.84, 1.89, 1.30, 2.40];
var genero = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"];


function alturaMaior(altura) {
    var maiorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] > maiorAltura) {
            maiorAltura = altura[i];
        }
    }
    return maiorAltura;
}

function alturaMenor(altura) {
    var menorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] < menorAltura[i]) {
            menor = altura[i];
        }
    }
    return menorAltura;
}

function mediaHomens(genero, altura) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "M") {
            soma += altura[i];
            media++;
        }
    }
    return (soma / media);
}

function qtMulheres(genero) {
    var Mulheres = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "M") {
            Mulheres++;
        }
    }
    return Mulheres;
}

alert("A Maior Altura é " + alturaMaior(altura) + " Metros.");
alert("A Menor Altura é " + alturaMenor(altura) + " Metros.");
alert("A Média de Altura dos homens é de " + mediaHomens(genero, altura).toFixed(2) + " Metros.");
alert("A Quantidade é de " + qtMulheres(genero) + " Mulheres.");