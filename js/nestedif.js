var username = prompt("Username: ");
var password = prompt("Password: ");

if(username == "dumbways.id"){
    if(password == "dumbways123"){
        document.write("<h2>Selamat Anda berhasil login</h2>")
    }
    else{
        document.write("<p>Password salah</p>");
    }
}

else{
    document.write("<p>Anda Illegal</p>")
}