// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// INSERIMENT DATI

var numeroInserito = parseInt(prompt("Inserisci un numero"));

// CONFRONTO

if (numeroInserito % 2 == 0) {
  document.getElementById("risultato").innerHTML = "Il numero inserito" + " " + numeroInserito + " " + "è pari.";
} else {
  document.getElementById("avviso").innerHTML = "Il numero inserito" + " " + numeroInserito + " " + "è dipari.";
  numeroInserito = numeroInserito + 1;
  document.getElementById("risultato").innerHTML = "Nuovo numero:" + numeroInserito;
}
