<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!------Formulaire de connexion: 2 champs : id : mdp


    Quand le formulaire est soumis, la même page est affichée avec 

    l'identifiant tapé
    le mot de passe tapé

    Ces 2 phrases doivent être affichées avant le formulaire

-->
<div class="container">

<?php 

if(!empty($_GET["login"])&& !empty($_GET["password"])){
    echo "l'identifiant tapé est " .$_GET["login"] ."<br>";
    echo "le mot de passe tapé est $_GET[password]<br>";
}

?>

    <form method="post" action = "login.php" >

        <div class="form group">
            <label for="">Ientifiant</label>
            <input type="text" name="login" class="form-control">
        </div>
        <div class="form group">
            <label for="">Mot de Passe</label>
            <input type="text" name="password" class="form-control">
        </div>
        <button class="btn btn-primary">Se connecter</button>
    </form>
</div>

</body>
</html>