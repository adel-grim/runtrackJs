document.addEventListener("DOMContentLoaded", function() {
    let keylogger = document.getElementById("keylogger");
    
    document.addEventListener("keydown", function(event) {  //keydown = quand on tape une touche sur le clavier
        // verifie si la touche est bien une lettre ( minuscule et majuscule comprise)
        if (event.key.match(/^[a-zA-Z]$/)) {
            // Vérifier si le focus est sur le textarea grace au keylogger
            if (document.activeElement === keylogger) {
                // Ajoute la lettre deux fois dans le textarea si le focus est dessus
                keylogger.value += event.key + event.key;
            } else {
                // Ajouter la lettre une fois dans le textarea si le focus n'est pas dans le textarea
                keylogger.value += event.key;
            }
        }
    });
});
