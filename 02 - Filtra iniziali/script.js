/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Funzione che prende in input un array ed una lettera e restituisce un array contenente solo parole che iniziano per quella lettera
 * @param {Array} array 
 * @param {String} letter 
 * @returns Array 
 */
function filterArrayByLetter(array, letter){
    return array.filter(word => word.startsWith(letter));
}

// Invoca la funzione qui e stampa il risultato in console
console.log("L'array formato dalle parole che iniziano per la lettera 'a' è: "+filterArrayByLetter(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]