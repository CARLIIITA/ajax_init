
<?php

if (!empty($_POST["login"]) && !empty($_POST["password"])){

/* Exercice :

si le mot de passe vaut "sesame" et le login vaut "aladin",
renvoyer "vous êtes connecter"
sinon renvoyer "erreur d'identifiants"
*/

$login = $_POST("login");
$password = $_POST("password");

if ($login == "aladin"){
    if ($password == "sesame"){
    echo "<div class = 'alert alert-success'>Bonjour Aladin, vous êtes connecté</div>";
}else{
    echo "<div class='alert alert-danger'>Le mot de passe ne correspond pas </div>";
}

}else{
    echo "<div class = 'alert alert-danger'> Le login n'existe pas dans la base de données</div>";
}


}
?>
