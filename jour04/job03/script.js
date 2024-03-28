document.getElementById('filtrer').addEventListener('click', function() {
    const id = parseInt(document.getElementById('id').value); // Convertir en nombre
    const nom = document.getElementById('nom').value.toLowerCase(); // Convertir en minuscules pour la comparaison
    const type = document.getElementById('type').value;

    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultatFiltre = data.filter(pokemon => {
                return (isNaN(id) || pokemon.id === id) && // Vérifier si c'est un nombre valide
                       (nom === '' || pokemon.name.french.toLowerCase().includes(nom)) &&
                       (type === '' || pokemon.type.includes(type));
            });

            const resultatHTML = resultatFiltre.map(pokemon => {
                return `<p>${pokemon.id} - ${pokemon.name.french} - ${pokemon.type.join(', ')} - HP: ${pokemon.base.HP}, Attack: ${pokemon.base.Attack}, Defense: ${pokemon.base.Defense}, Sp. Attack: ${pokemon.base['Sp. Attack']}, Sp. Defense: ${pokemon.base['Sp. Defense']}, Speed: ${pokemon.base.Speed}</p>`;
            }).join('');

            document.getElementById('resultats').innerHTML = resultatHTML;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


