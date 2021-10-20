/*Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.*/

 

//Creo la variabile del numero 

const numero = Math.floor(Math.random() * 100); //con il math creo un numero random
console.log(numero); //stampo in numero in console

if (numero % 2 === 0) { // se (numero) è divisibile per 2 stampo pari
    console.log("even")
} else {                // altrimenti se stampo dispari
    console.log("odd")
}