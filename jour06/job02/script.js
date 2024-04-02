document.addEventListener("DOMContentLoaded", function() {
    // Liste des citations de Blade Runner
    const citations = [
        "Je veux voir un peu plus de vie.",
        "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
        "La lumière qui brille deux fois plus vite brûle deux fois moins longtemps.",
        "Je fais partie de ces rares personnes qui ont vu l'aube du siècle."
    ];

    // Fonction pour obtenir une citation aléatoire
    function getCitationAleatoire() {
        return citations[Math.floor(Math.random() * citations.length)];
    }

    // Écouteur d'événement pour le clic sur le bouton "Rebooter le Monde"
    document.getElementById("rebootButton").addEventListener("click", function() {
        // Modifier le texte du jumbotron avec une citation aléatoire
        document.getElementById("texteJumbotron").innerHTML = `<h3>Citation de Blade Runner</h3><p>"${getCitationAleatoire()}"</p>`;
    });
});

// Couleur des boutons avec ecouteurs d'evenements
document.addEventListener("DOMContentLoaded", function() {
    // Sélection de tous les boutons dans le groupe vertical
    const buttons = document.querySelectorAll('.btn-group-vertical button');

    // Fonction pour désactiver tous les boutons
    function desactiverTousLesBoutons() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
    }

    // Écouteurs d'événements pour chaque bouton
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Désactiver tous les boutons d'abord
            desactiverTousLesBoutons();
            // Activer le bouton cliqué
            btn.classList.add('active');
        });
    });
});