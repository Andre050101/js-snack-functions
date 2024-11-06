/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocalsArray = [];
// Dichiara la funzione qui.
/**
 * Tale funzione prende in ingresso una qualunque parola e restituisce il numero di vocali presenti nella parola(Maiuscole o minuscole che siano)
 * @param {string} word 
 * @returns {number} counter
 */
function vocalsCounter(word){
    let counter = 0;
    for(let i = 0; i < word.length; i++){
        let wordLowerCase=word.charAt(i).toLowerCase();
        if(wordLowerCase ==='a' || wordLowerCase ==='e' || wordLowerCase ==='i' || wordLowerCase ==='o' || wordLowerCase ==='u'){
            counter++; 
            vocalsArray.push(word.charAt(i));
        }     
    }
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("Il numero di vocali nella parola passata è: "+vocalsCounter(word)+", le quali sono: "+vocalsArray);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)