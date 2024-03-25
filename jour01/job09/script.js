function tri(numbers, order) {
    if (order === 'asc') {
        // Tri croissant
        return numbers.slice().sort((a, b) => a - b);
    } else if (order === 'desc') {
        // Tri décroissant
        return numbers.slice().sort((a, b) => b - a);
    } 
}

//tableau des nombres
const nombres = [5,4,8,10,12,11,7,9,1,3,2];
console.log(tri(nombres, 'asc')); // tri croissant
console.log(tri(nombres, 'desc')); // Tri décroissant

