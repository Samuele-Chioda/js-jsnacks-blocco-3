// Snack 12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let parola1 = prompt("scrivi una parola");
let parola2 = prompt("scrivi un'altra parola");

function confrontoParole(parola1, parola2) {
    if (parola1.length === parola2.length) {
        console.log(parola1, parola2);
    } else if (parola1.length < parola2.length) {
        console.log(parola2);
    } else 
        console.log(parola1);
    }

confrontoParole(parola1, parola2);



