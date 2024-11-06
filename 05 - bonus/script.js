/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui(Funzione tradizionale)
function helloByHour(name){
    const now = new Date();
    const hour = now.getHours();
    let saluto="";
    if(hour < 13)
        saluto = "Buongiorno ["+name+"]";
    else if(hour >= 13 && hour < 17)
        saluto = "Buon pomeriggio ["+name+"]";
    else
        saluto = "Buonasera["+name+"]";
    return saluto;

}
// Dichiara la funzione qui(Arrow function)
const hellobyHour = (name) => {
    const now = new Date();
    const hour = now.getHours();
    let saluto="";
    if(hour < 13)
        saluto = "Buongiorno ["+name+"]";
    else if(hour >= 13 && hour < 17)
        saluto = "Buon pomeriggio ["+name+"]";
    else
        saluto = "Buonasera["+name+"]";
    return saluto;
}






// Invoca la funzione qui e stampa il risultato in console
console.log(helloByHour(name));
console.log(hellobyHour(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.