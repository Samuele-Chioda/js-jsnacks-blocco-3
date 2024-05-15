// Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

let numeriDispari = [];
while (numeriDispari.lenght < 6 ){
    let numero = paresInt(prompt("inserisci numero"));

    if (numero % 2 !== 0)
        numeriDispari.push(numero);
}
console.log("numeriDispari:", numeriDispari);

