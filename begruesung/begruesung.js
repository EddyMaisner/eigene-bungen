function greetFromInput(){
    let vorname = document.getElementById('firstname').value;
    let nachname = document.getElementById('lastname').value;
    let text = document.getElementById('textarea').value;
    greet(vorname,nachname,text)
}

function greet(x, y, z){
    document.getElementById("output").innerHTML = `hello,  ${x} ${y} ihre Nachricht : ${z} wird weiter geleitet`;
}
    