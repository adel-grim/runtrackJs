let lays;

fetch('job02.json')
.then(response => response.json())
.then(data => {
  lays = data; // Sauvegardez les données dans la variable  lays
  jsonValueKey(); // Appelez la fonction après que les données ont été récupérées
})
.catch(error => console.error('Erreur : ' + error));

function jsonValueKey(){
  if (lays) { // Vérifiez si lays est défini
    console.log(lays.city);
  } else {
    console.log('laplateforme n\'est pas encore défini');
  }
}