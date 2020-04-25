var repeat = confirm("Ulangin terus klik oke aja");
var counter = 0;

do {
    counter++
    repeat = confirm("Ulangin terus klik oke aja");
}while(repeat)

document.write("Anda sudah ulangin ini sebanyak"+ counter +"kali");