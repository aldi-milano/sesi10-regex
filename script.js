//Soal 1

// let btn = document.getElementById('tombol')
// let inputKata = document.getElementById('inputCapital')
// let printHasil = document.getElementById('hasil')

// btn.onclick = function () {
//     cekCapital(inputKata.value)
// }

// function cekCapital (inputKata) {

//     let hasil = /^[A-Z]/.test(inputKata);
//     hasil ? printHasil.innerHTML = 'Huruf pertama adalah huruf besar' : 
//     printHasil.innerHTML = 'Huruf pertama adalah huruf kecil';
// }

// document.getElementById('tombol').addEventListener('click', cekCapital)


// function cekCapital () {
//     let haha = document.getElementById('inputCapital').value;

//     let cekChar = /^[A-Z]/.test(haha)
//     ? 'Huruf pertama adalah huruf besar' :
//     'Huruf pertama adalah huruf kecil';
//     document.getElementById('hasil').textContent = cekChar;
// }

//Soal 2

// document.getElementById('tombol2').addEventListener('click', cekNumber)

// function cekNumber () {
//     let inputNumber = document.getElementById('nomor').value;

//     let checkAngka = /^\d{9,11}$/.test(inputNumber);
//     checkAngka ? alert (true) : alert (false);
// }

//Soal 3

// document.getElementById('tombol3').addEventListener('click', cekKeyword)

// function cekKeyword () {
//     let inputKeyword = document.getElementById('keyword').value;

//     let pencarian = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/.test(inputKeyword);
//     pencarian ? alert ('Keyword Benar') : alert ('Keyword Salah');
// }
