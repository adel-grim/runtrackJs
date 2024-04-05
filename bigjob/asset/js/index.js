$(document).ready(function() {
    const users = [
        {
            "id": 1,
            "nom": "grim",
            "prenom": "Asmaa",
            "email": "asm.drs@laplateforme.io",
            "password": "123algerie",
            "role": "administrateur"
        },
        {
            "id": 2,
            "nom": "grim",
            "prenom": "Adel",
            "email": "adel.grim@laplateforme.io",
            "password": "jane13",
            "role": "moderateur"
        },
        {
            "id": 3,
            "nom": "sarou",
            "prenom": "Pierre",
            "email": "pierre.sarou@laplateforme.io",
            "password": "pierre13",
            "role": "utilisateur"
        }
    ];

    $('#connexionForm').submit(function(event) {
        event.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            switch (user.role) {
                case 'administrateur':
                    window.location.href = "administrateur.html";
                    break;
                case 'moderateur':
                    window.location.href = 'moderateur.html';
                    break;
                case 'utilisateur':
                    window.location.href = 'util.html';
                    break;
                default:
                    console.error('Rôle non reconnu');
            }
        } else {
            alert('Email ou mot de passe incorrect');
        }
    });
});