// Esercizio - Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito


let nome = prompt('Inserisci il tuo nome');

console.log (nome);

let cognome = prompt('Inserisci il tuo cognome');

console.log (cognome);

let favoriteColor = prompt('Inserisci il tuo colore preferito')

console.log (favoriteColor);

let message = `${nome}${cognome}${favoriteColor}23`;

console.log (message);

document.getElementById("titolo").innerHTML = message;

console.log (message);