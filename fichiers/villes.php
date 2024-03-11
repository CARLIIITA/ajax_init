<!--Déclarer un array contenant les villes
Paris,Tokyo, Madrid,Berlin, Bamako
et faire une boucle pour afficher toutes les villes dans des balises LI -->
<?php 

$villes =["Paris", "Tokyo", "Madrid", "Berlin", "Bamako"];
$villes[] = "Alger";

echo "<ul>";

foreach($villes as $ville){
    echo "<li>$ville</li>";
}
echo "<ul>";