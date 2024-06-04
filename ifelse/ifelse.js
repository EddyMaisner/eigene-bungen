/**
 * if (Bedingung) {
 * codeblock der ausgeführt wird, wenn die bedingung wahr ist.
 * 
 * } else{
 * codeblock der ausgeführt wird, wenn die bedinguung falsch ist
 * } 
 */



// Beispiel 1: 

let x = 10;

if (x > 5){
    console.log("x ist größer als 5");
} else {
    console.log("x ist nicht größer als 5");
}

// Beispiel 2:

let f = 10;

if (f > 15) {
    console.log("f ist größer als 15");
} else if (f > 5) {
    console.log("f ist größer als 5, aber kleiner oder gleich 15")
} else {
    console.log("f ist 5 oder kleiner")
}

// Beispiel 3:Verschachtelte "if" Anweisung

let e = 10;
let y = 20;

if (x > 5) {
    if (y > 15) {
        console.log("e ist größer als 5 und y ist größer als 15");
    } else {
        console.log("e ist größer als 5, aber y ist 15 oder kleiner");
    }
} else {
    console.log("e ist 5 oder kleiner");
}

/**
 * Zusammenfassung
if: Führt den Codeblock aus, wenn die Bedingung wahr ist.
else if: Führt den Codeblock aus, wenn die vorhergehende Bedingung falsch und die aktuelle Bedingung wahr ist.
else: Führt den Codeblock aus, wenn keine der vorherigen Bedingungen wahr ist.
Verschachtelte if-Anweisungen: if-Anweisungen können innerhalb anderer if-Anweisungen verwendet werden.
Ternärer Operator: Eine kompakte Alternative zu if-else für einfache Bedingungen.
 */

// Übungen