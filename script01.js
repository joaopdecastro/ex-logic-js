// 1. Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.

let evento1 = document.getElementById('calcula1')
evento1.addEventListener('click', function calculo() {

    let numero = document.querySelector('#numero')

    // Cálculo do dobro
    let calcdb = Number(numero.value) * 2
    document.querySelector('#dobro')
    dobro.value = calcdb

    // Cálculo da terça parte
    let calctr = Number(numero.value) / 3
    document.querySelector('#terca')
    terca.value = calctr

})