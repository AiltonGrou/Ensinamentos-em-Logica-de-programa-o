//Pergunta dia da semana
diaSemana = prompt('Qual é o dia da Semana??');
if (diaSemana == 'Sabado') {
    alert('Um bom final de Semana!!!');
} else if (diaSemana == 'Domingo') {
        alert('Um bom final de Semana!!!');
} else {
        alert('Uma boa Semana pra tu!!!')
}

//Verificar se o numero é negativo ou positivo
numero = prompt('digite um numero qualquer');
if (numero > 0) {
    alert('O numero é positivo!!');
} else {
    alert('O numero é negativo!!');
}

//Sistema de pontuação
pontuacao = prompt('Qual foi a sua pontuação no jogo??');
// ou pode por direto a pontuação tambem Ex: pontuacao = 105
if (pontuacao >= 100) {
    alert('Parabens! Vc alcançou a pontuação necessaria!!');
} else {
    alert('Pontuação não atingida, tente novamente');
}

//Mensagem informação de saldo
let saldo = 1500;
alert(`Seusaldo é de ${saldo}`);   //prefiro usar o ' e + mas serve também.

//Confirmação de usuario
let usuario = 'Ailton';
if (usuario == 'Ailton') {
    alert('Bem vindo a sua conta!!');
} else {
    alert('Usuario incorreto, tente novamente.');
}
// ou
let nome = prompt('Qual o seu nome?');
alert(`Bem vindo ${nome}`);
