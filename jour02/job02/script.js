function showhide() {
    let article = document.getElementById("article");  // Récupère l'élément de l'article en utilisant son ID
    let button = document.getElementById("button");  // Récupère le bouton  en utilisant son ID
    
    if (article.style.display === "none") {  // Vérifie si l'article est actuellement caché ou affiché, puis bascule son affichage en conséquence
        article.style.display = "block";
        button.textContent = "Disparaitre l'article";
    } else {
        article.style.display = "none";
        button.textContent = "Afficher l'article";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("button");
    button.addEventListener("click", showhide);  //Attache un gestionnaire d'événements pour écouter les clics sur le bouton. Lorsqu'un clic est détecté = fonction "showhide"
});
