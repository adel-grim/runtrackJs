function afficherJoursSemaine () {
let joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];  // tableau des jours de la semaine

for (let i = 0; i < joursSemaines.length; i++) {  //boucle for ou on initialise i à 0 si i est plus petit que la longueurs du tableau "joursSemaine alors on increment de +1 a chauqe fois"
    console.log(joursSemaines[i]);   // a chaque boucle ajoute un jour de la semaine en plus
}
}

afficherJoursSemaine();  // appel de la fonction pour afficher le resultat

