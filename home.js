//window.addEventListener("load" , function(){})
//C'est un raccourci de la méthode.ready de jQuery qui a le même effet que l'écouteur d'évenement 'load' de 'window'
$(function(){
    $(".nav-link").on("click", function(eventClick){
        eventClick.preventDefault();
        var link = $(this); //$(this) : représente l'élément sur lequel on a cliqué
        $.ajax({
            method:"get",
            url: link.attr("href"),
            dataType: "html", //dataType: précise le type de données de la réponse HTTP
            success: function (response){
                $("#content").html(response);
            },
            error: function(jqXHR, error, status){
                $("content").html("<div class='alert alert-danger'>" + error + " - " + status + "</div>")
            }
        //data: contient les données envoyés dans la requête dans un string(cle=valeur&cle2=valeur2&....)
        })
    })
})