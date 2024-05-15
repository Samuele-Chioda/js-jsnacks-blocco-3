// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3];

while (array1.length > array2.length) {
    array2.push(Math.random());
    
}
console.log("Array 1:", array1);
console.log("Array 2:", array2);