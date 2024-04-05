$(document).ready(function() {
    $('#password').on('input', function() {
        const password = $(this).val().trim();

        // Vérifier si le mot de passe est valide
        if (isPasswordValid(password)) {
            cacherMessageErreur('passwordError');
        } else {
            afficherMessageErreur('passwordError', 'Le mot de passe doit contenir au moins 5 caractères, y compris une lettre majuscule, une lettre minuscule et un chiffre');
        }
    });

    function isPasswordValid(password) {
        return password.length >= 5 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password);
    }

    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }

    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }

    //VERIFIER LE NOM

    $('#nom').on('input', function() {
        const nom = $(this).val().trim();
    
        if (isNomValid(nom)) {
            cacherMessageErreur('nomError');
        } else {
            afficherMessageErreur('nomError', 'Le nom doit contenir au moins 5 caractères');
        }
    });
    
    
    function isNomValid(nom) {
        return nom.length >= 4 ;
    }
    
    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }
    
    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }

    //VERIFIER LE PRENOM

    $('#prenom').on('input', function() {
        const preneom = $(this).val().trim();
    
        if (isPrenomValid(preneom)) {
            cacherMessageErreur('prenomError');
        } else {
            afficherMessageErreur('prenomError', 'Le prénom est trop court ');
        }
    });
    
    
    function isPrenomValid(prenom) {
        return prenom.length >= 5 ;
    }
    
    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }
    
    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }

    //VERIFIER LE MAIL

    $('#email').on('input', function() {
        const email = $(this).val().trim();
    
        if (isEmailValid(email)) {
            cacherMessageErreur('emailError');
        } else {
            afficherMessageErreur('emailError', 'Veuillez insérer un email contenant  @ / laplateforme.io ');
        }
    });
    
    function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.includes("@") && email.endsWith(".fr");
    }
    
    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }
    
    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }

    //VERIFIER LADRESSE

    $('#adresse').on('input', function() {
        const adresse = $(this).val().trim();
    
        if (isAdresseValid(adresse)) {
            cacherMessageErreur('adresseError');
        } else {
            afficherMessageErreur('adresseError', 'Veuillez rentrer une adresse valide au moin 10 caractères. ');
        }
    });
    
    function isAdresseValid(adresse) {
        return adresse.length >= 10 ;
    }
    
    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }
    
    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }

    //VERIFIER LE CODE POSTALE

    $('#cp').on('input', function() {
        const cp = $(this).val().trim();
    
        if (isCpValid(cp)) {
            cacherMessageErreur('cpError');
        } else {
            afficherMessageErreur('cpError', 'Veuillez insérer un code postale correct à 5 chiffres ');
        }
    });
    
    function isCpValid(cp) {
        return cp.length == 5 ;
    }
    
    function afficherMessageErreur(champ, message) {
        $('#' + champ).text(message).show();
    }
    
    function cacherMessageErreur(champ) {
        $('#' + champ).hide();
    }


    $('#connexionButton').on('click', function() {
        window.location.href = 'connexion.html';
    });
    
    $('#connexionButton').on('click', function() {
        setTimeout(function(){ 
            window.location.href = 'connexion.html';
        }, 4000);
        alert('Inscription réussi !');
    });
});