function jourTravaille(date) {
    // Quelques jours fériés
    const joursFeries = [
        "01/01/2024", // Nouvel An
        "01/04/2024", // Jour férié 2
        "08/05/2024", // Jour férié 3
        "01/05/2024"  // Fête du Travail
    ];

    // Obtenir la date au format jour/mois/année : day au format : 2-digit pour deux chiffres , month et weekday au format : long pour un texte long et year en numerci pour so
    const options = { day: '2-digit', month: 'long', year: 'numeric', weekday: 'long' };
    const dateFormatfr = date.toLocaleDateString('fr-FR', options);

    // Vérifier si la date est un jour férié
    if (joursFeries.includes(date.toLocaleDateString('fr-FR'))) {
        return `Le ${dateFormatfr} est un jour férié.`;
    }

    // Vérifier si la date est un samedi ou un dimanche (0 est dimanche, 6 est samedi)
    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        return `Non, ${dateFormatfr} est un week-end.`;
    }
    
    // Sinon, c'est un jour travaillé
    return `Oui, ${dateFormatfr} est un jour travaillé.`;
}

// Utilisation de la fonction avec deux exemples de dates
const maDate = new Date("2024-05-05");
console.log(jourTravaille(maDate)); // Appel de la fonction pour la première date

const otherDate = new Date("05-01-2024");
console.log(jourTravaille(otherDate)); // Appel de la fonction pour la deuxième date

const weekDate = new Date("03-25-2024");
console.log(jourTravaille(weekDate));
