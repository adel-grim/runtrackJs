document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inscription-form");
    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom");
    const emailInput = document.getElementById("email");
    const adresseInput = document.getElementById("adresse");
    const codepostalInput = document.getElementById("codepostal");
    const mdpInput = document.getElementById("mdp");
    

    nomInput.addEventListener("input", function() {
        if (nomInput.value.length < 3) {
            document.getElementById("error-nom").textContent = "Le nom doit contenir au moins 3 caractères.";
        } else {
            document.getElementById("error-nom").textContent = "";
        }
    });

    prenomInput.addEventListener("input", function() {
        if (prenomInput.value.length < 3) {
            document.getElementById("error-prenom").textContent = "Le prénom doit contenir au moins 3 caractères.";
        } else {
            document.getElementById("error-prenom").textContent = "";
        }
    });

    emailInput.addEventListener("input", function() {
        if (!isValidEmail(emailInput.value)) {
            document.getElementById("error-email").textContent = "Veuillez saisir une adresse email valide: qui contient un @ et se termine obligatoirement par un .fr";
        } else {
            document.getElementById("error-email").textContent = "E-mail valide";
        }
    });

    adresseInput.addEventListener("input", function() {
        if (adresseInput.value.length < 7) {
            document.getElementById("error-adresse").textContent = "L'adresse doit contenir au moins 7 caractères.";
        } else {
            document.getElementById("error-adresse").textContent = "Adresse valide";
        }
    });

    codepostalInput.addEventListener("input", function() {
        if (codepostalInput.value.length < 5 || !isValidPostalCode(codepostalInput.value)) {
            document.getElementById("error-codepostal").textContent = "Veuillez saisir un code postal valide (au moins 5 chiffres).";
        } else {
            document.getElementById("error-codepostal").textContent = "Code postal valide";
        }
    });

    mdpInput.addEventListener("input", function() {
        if (!isValidPassword(mdpInput.value)) {
            document.getElementById("error-mdp").textContent = "Le mot de passe doit contenir au moins 7 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial.";
        } else {
            document.getElementById("error-mdp").textContent = "Mot de passe valide";
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            console.log("Formulaire valide, envoi en cours...");
            // Si le formulaire est valide, vous pouvez soumettre le formulaire ici
            // form.submit();
        }
    });

    function validateForm() {
        let isValid = true;
        // Ajoutez votre logique de validation des autres champs ici
        return isValid;
    }

    function isValidEmail(email) {
        // Vérifie qu'il y a au moins un "@" et un ".fr"
        return email.includes("@") && email.endsWith(".fr");
    }

    function isValidPostalCode(codepostal) {
        // Vérifie qu'il y a au moins 5 chiffres
        return /^\d{5}$/.test(codepostal);
    }

    function isValidPassword(mdp) {
        // Le mot de passe doit contenir au moins 7 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
        return mdp.length >= 7 && lowercaseRegex.test(mdp) && uppercaseRegex.test(mdp) && digitRegex.test(mdp) && specialCharRegex.test(mdp);
    }
});

    // Fonction pour valider le formulaire
    function validateForm() {
        // Vérifie si tous les champs sont remplis
        return nomInput.value && prenomInput.value && emailInput.value && adresseInput.value && codepostalInput.value && mdpInput.value;
    }

    // Fonction pour afficher le message d'inscription réussie et rediriger vers la page de connexion
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("inscription-form");
    
        // Fonction pour valider le formulaire
        function validateForm() {
            // Récupérer les valeurs des champs
            const nom = document.getElementById('nom').value;
            const prenom = document.getElementById('prenom').value;
            const email = document.getElementById('email').value;
            const adresse = document.getElementById('adresse').value;
            const codepostal = document.getElementById('codepostal').value;
            const mdp = document.getElementById('mdp').value;
    
            // Vérifier si tous les champs sont remplis
            return nom && prenom && email && adresse && codepostal && mdp;
        }
    
        // Fonction pour afficher le message d'inscription réussie et rediriger vers la page de connexion
        function inscriptionReussie() {
            const message = document.createElement("div");
            message.textContent = "Inscription réussie, redirection vers connexion en cours...";
            form.appendChild(message);
            setTimeout(function() {
                window.location.href = "connexion.html"; // Redirection vers la page de connexion
            }, 4000); // Délai de 4 secondes avant la redirection
        }
    
        // Écouteur d'événement pour la soumission du formulaire
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire par défaut
            if (validateForm()) {
                inscriptionReussie(); // Appel de la fonction d'inscription réussie
            } else {
                alert("Veuillez remplir tous les champs."); // Message d'alerte si tous les champs ne sont pas remplis
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("connexion-form");
        const emailInput = document.getElementById("email");
        const errorEmail = document.getElementById("error-email");
    
        // Fonction pour valider l'e-mail
        function validateEmail() {
            const email = emailInput.value;
            if (!email.includes("@") || !email.endsWith(".fr")) {
                errorEmail.textContent = "L'e-mail doit contenir au moins un '@' et se terminer par '.fr'";
            } else {
                errorEmail.textContent = ""; // Efface le message d'erreur s'il est valide
            }
        }
    
        // Écouteur d'événement pour chaque saisie dans le champ email
        emailInput.addEventListener("input", validateEmail);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("connexion-form");
        const mdpInput = document.getElementById("mdp");
        const errorMdp = document.getElementById("error-mdp");
    
        // Fonction pour valider le mot de passe
        function validatePassword() {
            const mdp = mdpInput.value;
            const lowercaseRegex = /[a-z]/;
            const uppercaseRegex = /[A-Z]/;
            const digitRegex = /\d/;
            const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
            
            if (mdp.length < 7 || !lowercaseRegex.test(mdp) || !uppercaseRegex.test(mdp) || !digitRegex.test(mdp) || !specialCharRegex.test(mdp)) {
                errorMdp.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et avoir au moins 7 caractères.";
            } else {
                errorMdp.textContent = ""; // Efface le message d'erreur s'il est valide
            }
        }
    
        // Écouteur d'événement pour chaque saisie dans le champ mot de passe
        mdpInput.addEventListener("input", validatePassword);
    });

    function validateForm() {
    return validateEmail() && validatePassword();
}

// Événement de soumission du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    if (validateForm()) {
        alert("Connecté avec succès"); // Afficher le message si les champs sont valides
    }
});






