window.addEventListener("load", function(){
   let form = document.querySelector('form');
   form.addEventListener("submit",function(event) {
    /**
 * La variable 'event' est un objet qui représente l'évènement 
 *      sur lequel on a mis un écouteur (dans le cas présent event est 
 *      un SubmitEvent).                
 * La méthode 'preventDefault' permet d'annuler le comportement par 
 *      défaut de l'évènement.
    */
    event.preventDefault();
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    /**
 * Dans la méthode onreadystatechange, on définit ce qu'il va se passer  quand l'état de l'objet XHR change. 
 *      Il y a 5 états: 
 *      0 : (UNSENT) état initial                
 *      1 : (OPENED) l'appel AJAX est lancé
 *      2 : (HEADERS_RECEIVED) les entêtes de la reponse HTTP sont reçus                  
 *      3 : (LOADING) chargement de la reponse
 *      4 : (DONE) le requête est finie  
 * 
 * la propriétée status correspond au code HTTP de la réponse, 
 * ex :
 *  200 : OK
 * 
    */
     if(xhttp.readyState == 4){
        if (xhttp.status == 200) {
            document.querySelector("#content").innerHTML = xhttp.responseText;
        }else if(xhttp.status == 404){
            document.querySelector("#content").innerHTML = "<div class= 'alert alert-warning'> Erreur AJAX 404 </div>";
        }else{
            document.querySelector("#content").innerHTML = "<div class= 'alert alert-danger'> Erreur AJAX</div>";
                }
            
            }
     }
    xhttp.open("POST","login.php");
    let inputLogin =  document.getElementsByName("login")[0];
    console.log("getElementByName", document.getElementByName("login"));
        /**
     * Pour récuperer un élement HTML à partir d'un attribut, le sélecteur CSS va ressembler à
     *      [attribut='valeur]
         */
        let inputPassword =  document.querySelector("[name='password']");
        let parametres = "login=" + inputLogin.value + "8password=" + inputPassword.value; 
        /**
     * l'entête de requête 'Content-type' doit être modifié pour faire 
     * une requête AJAX en méthode post pour que les données soient bien encodées
    */
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parametres);
    })
})
