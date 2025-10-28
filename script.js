
let KmDaPercorrere = prompt("Quanti KM devi percorrere?"); //creo una variabile e gli assegno un prompt


//creo un ciclo che controlla che i dati inseriti non siano una stringa o uno spazio vuoto 
// e mi mostri nuovamente il prompt per inserire i dati
while (isNaN(KmDaPercorrere) || (KmDaPercorrere.trim() == "")) {

    alert("Devi inserire un numero per i KM da percorrere"); //creo la finestra di output

    KmDaPercorrere = prompt("Quanti KM devi percorrere?");  //l'utente deve immettere la distanza che deve percorrere

}


let etàPasseggero = prompt("Qual è la tua età?"); //creo un'altra variabile a cui assegno un altro prompt, ed altre variabili

let prezzoAlKm = 0.21; //creo una variabile per il prezzo del biglietto al km

let prezzoPerDistanza = KmDaPercorrere * prezzoAlKm; //creo una variabile che calcola il costo del biglietto, moltiplicando
//la distanza da percorrere x il prezzo al km


console.log(prezzoPerDistanza) //stampo su console

let scontoMinorenni = prezzoPerDistanza * 20 / 100; //creo una variabile che calcola la percentuale del 20% per i minorenni
let scontoOver65 = prezzoPerDistanza * 40 / 100; //creo una variabile che calcola la percentuale del 40% per gli over 65

console.log(scontoMinorenni)

let prezzoMinorenni; //creo una variabile che conterrà poi lo sconto per i minorenni
let prezzoOver65; //creo una variabile che coneterrà poi lo sconto per gli over 65

//creo un ciclo che controlla che i dati inseriti non siano stringhe o spazi vuoti
while (isNaN(etàPasseggero) || (etàPasseggero.trim() == "")) {

    alert("Devi inserire un numero per l'età"); //creo la finestra di output

    etàPasseggero = prompt("Qual è la tua età?"); //creo la finestra di output

}

//creo una condizione che controlla che, se l'utente ha inserito un età inferiore a 18 anni, viene applicato uno sconto del 20%
if (etàPasseggero < 18) {

    prezzoMinorenni = prezzoPerDistanza - scontoMinorenni; //modifico la variabile creata in precedenza
    console.log(prezzoMinorenni)
    document.getElementById("minorenni").textContent = prezzoMinorenni; //mostra il risultato nella pagina
    console.log("L'importo che paghi è: " + prezzoMinorenni);
    alert("L'importo che paghi è: " + prezzoMinorenni.toFixed(2)); //creo la finestra di output

}

//altrimenti se l'utente ha inserito un'età superiore a 65 anni, viene applicato uno sconto del 40%
else if (etàPasseggero > 65) {

    prezzoOver65 = prezzoPerDistanza - scontoOver65; //modifico la variabile creata in precedenza
    document.getElementById("over65").textContent = prezzoOver65; //mostra il risultato nella pagina
    console.log("L'importo che paghi è: " + prezzoOver65);
    alert("L'importo che paghi è: " + prezzoOver65.toFixed(2)); //creo la finestra di output
}

//altrimenti calcola soltanto la distanza da percorrere e la moltiplica
// per il prezzo el km, e non viene applicato nessuno sconto
else {

    document.getElementById("per-distanza").textContent = prezzoPerDistanza; //mostra il risultato nella pagina
    console.log("L'importo che paghi è: " + prezzoPerDistanza);
    alert("L'importo che paghi è: " + prezzoPerDistanza.toFixed(2)); //creo la finestra di output

}



















