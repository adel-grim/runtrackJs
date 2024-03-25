function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0)) {   
        return true; // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}

let annee= 2021;  //année à verifier 
console.log(bisextile(annee));  //retourne le resultat dans la console 