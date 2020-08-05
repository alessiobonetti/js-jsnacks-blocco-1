// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// INSERIMANTO DATI

var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci seconda parola");

// CONFRONTO

if (primaParola.length > secondaParola.length) {
  console.log(secondaParola + " " + primaParola);
  document.getElementById("risultato").innerHTML = secondaParola + " " + primaParola;
} else if (primaParola.length < secondaParola.length) {
  document.getElementById("risultato").innerHTML = primaParola + " " + secondaParola;
} else {
  document.getElementById("risultato").innerHTML = primaParola + " e " + secondaParola + " sono lunghe uguali.";
}
