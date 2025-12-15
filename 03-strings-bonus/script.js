const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf("Y");
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.substring(4);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace("York", "Dehli");
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"

// 6. Shake!
// Genera tre ricette utilizzando la variabile shoppingList 

const frullato_1 = shoppingList.substring(0,4) + " e " + shoppingList.substring(6,12)
const frullato_2 = shoppingList.substring(0,4) + " e " + shoppingList.substring(14,20)
const frullato_3 = shoppingList.substring(0,13) + " e" + shoppingList.substring(21)

console.log(`"Frullato primaverile" = ${frullato_1}`);
console.log(`"Frullato energizzante" = ${frullato_2}`);
console.log(`"Frullato catastrofico" = ${frullato_3}`);

// 7. Calembour 
// Realizza un gioco di parole tra la variabile city e la variabile shoppingList 
const fruitReplaced = shoppingList.substring(0,4).replace("mele", "mela")
console.log (`${city} è anche detta = la grande ${fruitReplaced}`)

// 8. Carovita 
// Assegna un prezzo ad ogni frutto della variabile shoppingList, 
// dopodiché stampa in console i singoli prezzi e il costo totale.
const prezzoMele = (2.5);
const prezzoBanane = 4;
const prezzoArance = (3.5);
const prezzoUva = 5; 

console.log(`Costi singoli elementi: ` + `Mele = ${prezzoMele}` + `€; ` + `Banane = ${prezzoBanane}` + `€; ` 
    + `Arance = ${prezzoArance}` + `€; ` + `Uva = ${prezzoUva}` + `€. ` + `Prezzo totale = `  
    + (prezzoMele + prezzoBanane + prezzoArance + prezzoUva) + `€`)

// 9. "80fame"
// Esagera con la spesa e mostra il totale stampando il risultato 
// in console
console.log(`Costi singoli elementi: ` + `4 Mele = ${prezzoMele*4}` + `€; ` + `2 Banane = ${prezzoBanane*2}` + `€; ` 
    + `6 Arance = ${prezzoArance*6}` + `€; ` + `2 Uva = ${prezzoUva*2}` + `€. ` + `Prezzo totale = `  
    + (prezzoMele*4 + prezzoBanane*2 + prezzoArance*6 + prezzoUva*2) + `€`)

// 10. Stringere la cinghia
// Crea una variabile budget e una condizione secondo cui, se la somma di tutta la spesa
// è uguale o inferiore al valore della variabile budget, viene mostrato un messaggio in console che 
// mostra il totale da spendere e conferma di essere ancora ancora entro il budget, altirmenti
// viene mostrato un messaggio che suggerisce di limitarsi con le spese
const budget = 50;

if (prezzoMele*4 + prezzoBanane*2 + prezzoArance*6 + prezzoUva*2 <=budget) {
    console.log("Perfetto! Con una spesa di " + (prezzoMele*4 + prezzoBanane*2 + prezzoArance*6 + prezzoUva*2 + "€ ") 
    + "Rientri nel tuo budget di " + budget + "€")
}
else {
    console.log("Oh no! Forse devi contenere le spese...")
}




