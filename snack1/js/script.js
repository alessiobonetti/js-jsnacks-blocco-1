// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// INSERIMANTO DATI

var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero = parseInt(prompt("Inserisci il secondo numero"));

// CONFRONTO
if (primoNumero == "" || secondoNumero == ""){
  alert("Inserisci i numeri");
  primoNumero = parseInt(prompt("Inserisci il primo numero"));
  secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
} else {
  if (primoNumero > secondoNumero) {
    document.getElementById("risultato").innerHTML = "Il numero maggiore è: " + "" + primoNumero;
  } else if (secondoNumero > primoNumero) {
    document.getElementById("risultato").innerHTML = "Il numero maggiore è: " + "" + secondoNumero;
  } else {
    document.getElementById("risultato").innerHTML = "I numeri sono uguali.";
  }
}
