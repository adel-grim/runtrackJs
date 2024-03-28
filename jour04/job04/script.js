document.getElementById('updateButton').addEventListener('click', function() {
    fetch('utilisateur.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const tableBody = document.getElementById('userTableBody');
            // Effacer le contenu actuel du tableau
            tableBody.innerHTML = '';

            // Parcourir chaque utilisateur et créer une ligne dans le tableau pour chacun d'eux
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${user.id}</td><td>${user.nom}</td><td>${user.prenom}</td><td>${user.email}</td>`;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

