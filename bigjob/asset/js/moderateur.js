document.addEventListener('DOMContentLoaded', function() {

    let requestsData = [
      { id: 1, nom: "Loui", prenom: "Roger", dateDemande: "2024-04-12", statut: "En attente" },
      { id: 2, nom: "Grim", prenom: "Adel", dateDemande: "2024-04-9", statut: "En attente" },
      { id: 3, nom: "Depardieu", prenom: "Alex", dateDemande: "2024-1-7", statut: "En attente" },
      { id: 4, nom: "Supo", prenom: "Momo", dateDemande: "2024-04-6", statut: "En attente" },
      { id: 5, nom: "Azerty", prenom: "Qwerty", dateDemande: "2024-04-5", statut: "En attente" },
      { id: 6, nom: "Vava", prenom: "Nono", dateDemande: "2024-04-3", statut: "En attente" },
      { id: 7, nom: "Peter", prenom: "Boze", dateDemande: "2024-04-1", statut: "En attente" },
      { id: 8, nom: "Arthur", prenom: "Madin", dateDemande: "2024-04-1", statut: "En attente" }
    ];

    let tableBody = document.getElementById('requests-table-body');
  
    // Boucle pour afficher dans le tableau
    requestsData.forEach(function(request) {
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${request.id}</td>
        <td>${request.nom}</td>
        <td>${request.prenom}</td>
        <td>${request.dateDemande}</td>
        <td>${request.statut}</td>
        <td>
          <button type="button" class="btn btn-success btn-sm">Accepter</button>
          <button type="button" class="btn btn-danger btn-sm">Refuser</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  });