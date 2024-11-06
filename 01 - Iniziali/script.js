/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui. (Funzione tradizionale)
/**Funzione che prende in ingresso un array di stringhe e restituisce un array formato da iniziali delle stringhe appartenenti all'array in ingresso
 * 
 * @param {Array} array //array in ingresso dalla quale estrarre le iniziali 
 * @returns {Array} firstLetter //Array contenente le lettere iniziali
 */
function firstLetterArray (array){              //Dichiarazione funzione firstLetterArray
    const firstLetter = [];                     //Dichiarazione array che conterrà le lettere iniziali delle stringhe
    for(let i = 0; i < array.length; i++){      //Dichiarazione ciclo for
        firstLetter[i]=array[i].charAt(0);      //Per ogni elemento dell'array, estrae la prima lettera e la mette nell'array di iniziali 
    }
    return firstLetter;                         //Ritorna array con iniziali
}
// Dichiara la funzione qui. (Arrow function)
const firstLetterArray = (array) => array.map(word => word.charAt(0));
console.log(firstLetterArray(names));

// Invoca la funzione qui e stampa il risultato in console
console.log("L'array formato dalle lettere iniziali degli elementi appartenenti all'array di partenza è: "+firstLetterArray(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]