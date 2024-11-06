/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "Javascript";
const vocalsArray = [];
// Dichiara la funzione qui(Funzione tradizionale)
/**
 * Tale funzione prende in ingresso una qualunque parola e restituisce il numero di vocali presenti nella parola(Maiuscole o minuscole che siano)
 * @param {string} word 
 * @returns {number} counter
 */
/*
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
}*/
// Dichiara la funzione qui(Arrow function)
const vocalCountrFunction = (word) => {
    const vocalsArray=[];
    const vowels=['a', 'e', 'i', 'o', 'u'];
    word.toLowerCase().split('').forEach(letter => {
        if(vowels.includes(letter))
            vocalsArray.push(letter);
    });
    
    return {
        count: vocalsArray.length,
        vowels: vocalsArray
    };
}


// Invoca la funzione qui e stampa il risultato in console
//console.log("Il numero di vocali nella parola passata è: "+vocalsCounter(word)+", le quali sono: "+vocalsArray);
console.log(vocalCountrFunction(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)