
/**           */                                                    
window.addEventListener("load", function(){
    document.querySelector('#action').addEventListener("click",loadDoc);
    })


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            document.querySelector("#demo").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET","fichier/info.txt");
    xhttp.send();
}