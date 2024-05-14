// creo un array vuoto
let array=[];
// chiedo all'utente il numero di elementi che vuole inserire
let numeroUtente = parseInt(prompt("inserisci il numero di elementi che vuoi inserire nel tuo array"));
// metto dei limiti al numero che può inserire l'utente
if (numeroUtente > 100 || numeroUtente < 1){
console.log("error metti un numero da 1 a 100");
}
// se il numero va bene procedo con il ciclo for
else{
    for(let x=0; x<numeroUtente; x++){
        let numeroCasual = Math.floor(Math.random() * 100 + 1);
        array.push(numeroCasual);
}
}
console.log(array);