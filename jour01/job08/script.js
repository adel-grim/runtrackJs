function estNombrePremier(nombre) {
    // Vérifie si le nombre est inférieur ou égal à 1
    if (nombre <= 1) {
        return false; // Si c'est le cas, le nombre n'est pas premier, donc retourne false
    }
    
    // Boucle pour vérifier si le nombre est divisible par d'autres nombres que 1 et lui-même
    for (let i = 2; i <= Math.sqrt(nombre); i++) {       // Math.sqrt() est utile dans diverses situations où vous avez besoin de calculer des longueurs, des distances ou d'autres grandeurs qui impliquent des opérations de racine carré
        if (nombre % i === 0) { // Vérifie si le nombre est divisible par i
            return false; // Si c'est le cas, le nombre n'est pas premier, donc retourne false
        }
    }
    
    // Si le nombre n'est divisible par aucun autre nombre que 1 et lui-même, il est premier
    return true; // Retourne true pour indiquer que le nombre est premier
}

function sommeNombresPremiers(nombre1, nombre2) {
    // Vérifie si les deux nombres sont premiers en utilisant la fonction estNombrePremier
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        // Si les deux nombres sont premiers, retourne leur somme
        return nombre1 + nombre2;
    } else {
        // Sinon, retourne false car au moins l'un des nombres n'est pas premier
        return false;
    }
}

// Exemple d'utilisation
console.log(sommeNombresPremiers(7, 11)); // Affiche 18, car 7 et 11 : nombres premiers
console.log(sommeNombresPremiers(4, 7)); // Affiche false car 4 n'est pas premier
