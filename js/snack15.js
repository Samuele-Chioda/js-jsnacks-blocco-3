// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

// Creo oggetto palla
let palla = {
    // spaziamo con le virgole tra un valore e l'altro!
    nome: "palla",     
    peso: 10
};

// Chiedo all'utente di inserire un nuovo peso
let nuovoPeso = prompt("Inserisci il nuovo peso della palla:");

// Modifico il peso della palla con il valore inserito dall'utente
let palla.peso = parseInt(nuovoPeso);  // Converto il valore inserito in un numero intero (parseInt)!!

// Stampo l'oggetto palla in console 
console.log(palla);

