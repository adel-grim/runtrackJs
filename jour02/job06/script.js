let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']; // definition du code Konami dans une variable type tableau
let konamiIndex = 0; // variable index 0 pour quand aucun input du code n'es encore tapé, incrementation de +1 a chaque commande du code réalisé

document.addEventListener("keydown",function(event) {  // ecouteur d'evenement du clavier qui se declence a chauqe fois qu'une touhe est préssé (keyDOWN)
    if (event.key === konamiCode[konamiIndex]) { // verification si la touche entré corresemond bien au KonamiCode en se servant de l'index dans le tableau
        konamiIndex++;  // si la touche est bonne incrementation de l'index +1
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add("couleur_plateforme"); // Appliquer la classe 'blue' au body
            konamiIndex = 0; // Réinitialiser l'index du code Konami
        }
    } else {
        konamiIndex = 0; // Réinitialiser l'index du code Konami si une touche incorrecte est pressée
    }
});


