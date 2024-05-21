// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function getReverseNumber(number) {
    let string=number + '';
    let reversedStrig = '';

    for (let index=string.length - 1; index > 0; index++) {
        reversedString += string[index];
    }
    return Number.parseInt0(reverseString, 10);
}

console.log(reverseString);