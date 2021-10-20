/*
 * Crea due array che hanno un numero di elementi diversi. 
 * Aggiungi elementi all'array che ha meno elementi 
 * fino a quando ne avrà tanti quanti l'altro.
 */


 const array1 = [15, 2, 7]; //creazione deell'array
 const array2 = [5, 27, 56, 4 ,6, 7, 9]; //creazione deell'array
 
 

 console.log('array1 lunghezza', array1 );   //stampo in console i numeri dell'array1
 console.log('array2 lunghezza', array2 );  //stampo in console i numeri dell'array2

 
// se array1 e' lungo quanto l'array 2 -> fine
if( array1.length === array2.length){ // controllo se le due array sono lunghe uguali

    console.log('I due array sono di uguale lunghezza. FINE');
    arrayPiccolo = array1;
    arrayGrande = array2;

} else if (array1.length < array2.length) { // se la lunghezza del array1 è minore della lunghezza di array2
    arrayPiccolo = array1;
    arrayGrande = array2;
    console.log('arra1 < arra2')

} else { // se le possibilità precedenti sono false rimane questa

    arrayPiccolo = array1;
    arrayGrande = array2;
    console.log('arra1 >  arra2')

}

// caloclo la differenza tra la lunghezza dei due array
const differenza = arrayGrande.length - arrayPiccolo.length

// aggiungo tanti elementi all'array piu piccolo quanti ne ha l'array grande
for(let i = 0; i < differenza; i++ ){
  arrayPiccolo.push(Math.floor(Math.random()*100)) //creo un numero random arrotondato tra 1 e 99
}      


console.log("array grande", arrayGrande,"array piccolo", arrayPiccolo) //stampo il risultato