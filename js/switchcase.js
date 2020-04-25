var undian = prompt("Selamat Anda Mendapatkan Undian dari dumbways.id, silahkan pilih hadiah dari 1 - 3 : ");

var hadiah = "";

switch(undian){
    case "1":
        hadiah = "Kaos";
        break;

    case "2":
        hadiah = "Macbook Air";
        break;

    case "3":
        hadiah = "Sticker";
        break;

    default:
        document.write("<h3>Yang bener pilihnya anjir kalau mau dapet</h3>")
}

if(hadiah === ""){
    document.write("<h3>Kamu gagal makanya jangan asal</h3>")
}

else{
    document.write("<h4>Kamu dapet hadiah"+ " " + hadiah +" " +"anjir" + "</h4>")
}