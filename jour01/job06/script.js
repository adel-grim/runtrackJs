function fizzbuzz() {
    for (let i = 1; i <= 151; i++) { // meme boucle que pour le job 05 avec les jours de semaine: boucle for avec une variable let "i" initialisé a 1 si i(1) est plus petit que 151 on increment de +1 a chaque iteration de la boucle jusqu'a atteindre 151
        if (i % 3 === 0 && i % 5 === 0) {  //si multible de 3 et 5 affiche fizzbuzz
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // si multiple de 3 affiche Fizz
            console.log("Fizz");
        } else if (i % 5 === 0) {  //si multiple de 5 affiche  Buzz
            console.log("Buzz");
        } else {
            console.log(i);  //si dans aucun de ces cas alors on affiche juste le chiffre/nombre
        }
    }
} 
    
fizzbuzz();  //appel de la fonction 