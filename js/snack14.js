// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer


// Chiedo all'utente un numero di secondi
let secondiUtente = parseInt(prompt("Scrivi i secondi che vuoi attendere"));

// Verifico che l'utente abbia inserito un numero valido
if (isNaN(secondiUtente) || secondiUtente <= 0) {
    alert("Per favore, inserisci un numero di secondi valido.");
} else {
    // Imposto il timer
    const timer = setInterval(function() {
        console.log(secondiUtente); // Stampo i secondi rimanenti
        secondiUtente--; // Decrement0 il conteggio di 1

        // Interrompo il timer quando il conteggio raggiunge zero
        if (secondiUtente < 0) {
            clearInterval(timer);
            console.log("Tempo scaduto!");
        }
    }, 1000); // Esegu0 ogni 1000 millisecondi (1 secondo)
}
