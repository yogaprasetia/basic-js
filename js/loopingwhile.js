var repeat = confirm("Ulangin terus klik oke aja");
var counter = 0;

while(repeat){
    counter++
    repeat = confirm("Ulangin terus klik oke aja");
}

document.write("Anda sudah ulangin ini sebanyak"+ counter +"kali")