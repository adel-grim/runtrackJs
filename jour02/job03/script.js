document.addEventListener("DOMContentLoaded", function() {
        function addOne() {          // Fonction pour incrémenter le compteur et mettre à jour l'affichage
       
        let compteurElement = document.getElementById("compteur");  // Récupérer l'élément du compteur

        let compteurValeur = parseInt(compteurElement.textContent);   // Récupérer la valeur actuelle du compteur, la convertir en nombre et l'incrémenter
        compteurValeur++;                       //incremente +1 a chaque clique

       
        compteurElement.textContent = compteurValeur;  // Mettre à jour le contenu du compteur avec la nouvelle valeur
    }

    // Ajouter un gestionnaire d'événements au bouton pour appeler la fonction d'incrémentation lorsqu'il est cliqué
    document.getElementById("button").addEventListener("click", addOne);
});
