document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector("footer"); // pour selectionner l'element footer

    window.addEventListener("scroll", function() {  // ecouteur pour savoir quand l'utilisateur scroll
        let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;  //calcul du pourcentage de defilement de la page
        footer.style.width = scrollPercentage + "%";     // Réglage de la largeur du footer en fonction du pourcentage de défilement
        footer.style.backgroundColor = getColor(scrollPercentage);  // definit la couleur du footer en fonction du pourcentage de scroll grace la variable juste avant et recupere la couleur grace la fonction getColor juste en bas
    });

    function getColor(percentage) {
        let red = Math.floor(255 * (1 - percentage / 100)); // rouge décroissante (255 à 0 progressivement)
        let blue = Math.floor(255 * (percentage / 100)); // bleu croissant ( 0 à 255 progressivement)
        return "rgb(" + red + ",0," + blue + ")";
    }});
