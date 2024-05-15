// array frigorifero con lista dei frutti all'interno
const frigorifero = [ 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
// aggiungo elemento pesca alla lista dei frutti
frigorifero.push('pesca');

let cocomeroPresente = false;
// ciclo for per controllare elementi frigorifero
for (let frutto of frigorifero) {
    if (frutto === 'cocomero') {
        cocomeroPresente = true;
    }
}
// condizioni di stampa in console
if (cocomeroPresente) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}
