var pertanyaan = prompt("Apakah benar mata uang indonesia itu Rupiah (Rp) : ")

var jawaban = (pertanyaan.toUpperCase() == "IYA") ?
"Benar" : "Salah";

document.write(`Jawaban Aku <strong>${jawaban}</strong>`)