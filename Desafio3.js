//contador de 1 a 10 usando while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
} 

//contador de 10 a 0 usando while
let descontador = 10;
while (contador >= 0) {
    console.log(descontador);
    descontador--;
} 

//contagem regressiva com while
let contagemReg = prompt ('Digite um numero para ser contado até zero.');
while (contagemReg >= 0) {
    console.log(contagemReg);
    contagemReg--;
}

//contegem progressiva com while
let contagemPro = prompt ('Digite um numero para ser contado de zero até ele.')
let numero = 0
while (numero <= contagemPro) {
    console.log(numero);
    numero++;
}
