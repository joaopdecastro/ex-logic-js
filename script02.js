//Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.

let evento2 = document.getElementById('calcula2')
evento2.addEventListener('click', function calculo2() {

    let mt = document.querySelector('#metro')

    // Cálculo Quilômetro
    let calckm = Number(metro.value) / 1000
    document.querySelector('#km')
    km.value = calckm

    // Cálculo Hectômetro
    let calchm = Number(metro.value) / 100
    document.querySelector('#hm')
    hm.value = calchm

    // Cálculo Decametro
    let calcdam = Number(metro.value) / 10
    document.querySelector('#dam')
    dam.value = calcdam

    // Cálculo Decímetro
    let calcdm = Number(metro.value) * 10
    document.querySelector('#dm')
    dm.value = calcdm

    // Cálculo Centímetro
    let calccm = Number(metro.value) * 100
    document.querySelector('#cm')
    cm.value = calccm

    // Cálculo Milímetro
    let calcmm = Number(metro.value) * 1000
    document.querySelector('#mm')
    mm.value = calcmm

})