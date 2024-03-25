function jourTravaille(date) {
    // Quelques jours fériés
    const joursFeries = [
        "01/01/2024", // Nouvel An
        "01/04/2024", // Jour férié 2
        "08/05/2024", // Jour férié 3
        "01/05/2024"  // Fête du Travail
    ];

    // Date au format jour/mois/année
    const jour = ('0' + date.getDate()).slice(-2);
    const mois = ('0' + (date.getMonth() + 1)).slice(-2); // Les mois sont indexés à partir de 0
    const annee = date.getFullYear();
    const dateFormatfr = `${jour}/${mois}/${annee}`; //$ sert Interpolations de chaînes de caractères: Dans les chaînes de caractères en JavaScript (en particulier avec les modèles de chaînes de caractères), $ n'a pas de signification particulière, il est simplement traité comme n'importe quel autre caractère. 

    // Vérifier si la date est un jour férié
    if (joursFeries.includes(dateFormatfr)) {
        return `Le ${dateFormatfr} est un jour férié.`;
    }

    // Vérifier si la date est un samedi ou un dimanche (0 est dimanche, 6 est samedi)
    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        return `Non, le ${dateFormatfr} est un week-end.`;
    }
    else 
    // Sinon, c'est un jour travaillé
    return `Oui, le ${dateFormatfr} est un jour travaillé.`;
}

// Utilisation de la fonction avec deux exemples de dates
const maDate = new Date("2024-05-05");
console.log(jourTravaille(maDate)); // Appel de la fonction pour la première date

const otherDate = new Date("05-01-2024");
console.log(jourTravaille(otherDate)); // Appel de la fonction pour la deuxième date

const weekDate = new Date("03-25-2024");
console.log(jourTravaille(weekDate));
