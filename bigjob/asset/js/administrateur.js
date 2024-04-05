document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour récupérer les utilisateurs depuis le stockage local
  function getUsersFromLocalStorage() {
      const usersJSON = localStorage.getItem('users');
      return usersJSON ? JSON.parse(usersJSON) : [];
  }

  // Fonction pour sauvegarder les utilisateurs dans le stockage local
  function saveUsersToLocalStorage(users) {
      localStorage.setItem('users', JSON.stringify(users));
  }

  // Fonction pour afficher les utilisateurs dans le tableau
  function displayUsers(users) {
      const usersTableBody = document.getElementById('users-table-body');
      usersTableBody.innerHTML = ''; // Effacer le contenu actuel du tableau

      users.forEach(function(user) {
          const userRow = document.createElement('tr');
          userRow.innerHTML = `
              <td>${user.username}</td>
              <td>${user.role}</td>
              <td>
                  <button type="button" class="btn btn-danger btn-sm delete-user">Supprimer</button>
              </td>
          `;
          usersTableBody.appendChild(userRow);
      });
  }

  //récupération des utilisateurs depuis le stockage local et les afficher
  const users = getUsersFromLocalStorage();
  displayUsers(users);

  // Écoute l'événement quand on ajt des utilisateur
  const addUserForm = document.getElementById('add-user-form');
  addUserForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      // Récupére les valeurs des champs du formulaire
      const username = document.getElementById('username').value;
      const role = document.getElementById('role').value;

      // Création d'un nouvel utilisateur
      const newUser = { username: username, role: role };
      
      // Ajout du nouvel utilisateur à la liste des utilisateurs
      users.push(newUser);
      saveUsersToLocalStorage(users); // Sauvegarder les utilisateurs dans le stockage local
      displayUsers(users); // Met à jour l'affichage du tableau

      // Effacer les personnes des champs du formulaire après l'ajout de l'utilisateur
      document.getElementById('username').value = '';
      document.getElementById('role').value = 'moderateur'; // Remettre le rôle par défaut
  });

  // Écouteur d'événement pour la suppression d'un utilisateur
  document.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-user')) {
          const indexToRemove = Array.from(event.target.closest('tr').parentNode.children).indexOf(event.target.closest('tr'));
          users.splice(indexToRemove, 1); // Supprimer l'utilisateur du tableau
          saveUsersToLocalStorage(users); // Sauvegarder les utilisateurs mis à jour dans le stockage local
          displayUsers(users); // Mettre à jour l'affichage du tableau
      }
  });
});