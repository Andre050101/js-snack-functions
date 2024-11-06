/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui(Funzione tradizionale)
function helloPerson(name){
    return "Ciao ["+name+"]";
}

// Dichiara la funzione qui(Arrow function)
const hello = (name) => "Ciao ["+name+"]";

// Invoca la funzione qui e stampa il risultato in console

console.log(helloPerson(name));
console.log(hello(name));
//Risultato atteso se si passa 'Mario': // ciao Mario