// Diese Funktion zeigt den Index der Stelle der Objektes im Array
function indexOf() {
    //Erstellen des Arrays mit Namen als Objekten
    let name = ['Edvin', 'Luka', 'Marko', 'Spas', 'Luka'];

    //Zeigt den Index an von Edvin --> dieser wäre "0", da Arrays bei 0 beginnen zu zählen
    console.log(name.indexOf('Edvin'));

    //Zeigt den Index von dem ZWEITEN Luka
    console.log(name.indexOf('Luka', 2));

    //Zeigt den Index von Spas
    console.log(name.indexOf('Spas'));

    //Zeigt den Index von Fabien, da er aber nicht im Array ist, kommt als Ergebnis eine "-1"
    const namen = name.indexOf('Fabian');
    console.log(namen);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion fügt am Anfang und am Ende des Arrays ein weiteres Objekt hinzu
function pushUnshift() {
    //Erstellen des Arrays mit Namen als Objekten
    let Zahlen = ['10', '15', '20', '25', '30'];

    //Zeigt das Array an im Grundzustand
    console.log(Zahlen);

    //Fügt am Ende eine Zahl hinzu
    Zahlen.push(35);

    //Fügt am Anfang eine Zahl hinzu
    Zahlen.unshift(5);

    //Zeigt das ganze Array an nach den Änderungen
    console.log(Zahlen);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion entfernt Objekte am Ende und am Anfang des Arrays
function popShift() {
    //Erstellen des Arrays mit Tieren als Objekten
    let Tiere = ['Hase', 'Hund', 'Katze', 'Tiger', 'Maus', 'Löwe'];

    //Zeigt das ganze Array vor den Veränderungen
    console.log(Tiere);

    //Löscht das letzte Objekt im Array
    let popTier = Tiere.pop();

    //Löscht das erste Objekt im Array
    let shiftTier = Tiere.shift();

    //Zeigt das ganze Array nach den Veränderungen
    console.log(Tiere);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion gibt aus ob dieses Objekt enthalten ist im Array
function includes() {
    //Array mit Zahlen
    let Zahlen = ['10', '20', '30', '40', '50', '60']

    //Array anzeigen
    console.log(Zahlen);

    //Überprüft ob diese Zahlen vorhanden sind im Array
    let include20 = Zahlen.includes('20');
    let include70 = Zahlen.includes('70');

    //Ausgabe ob 20 und oder 70 enthalten sind im Array
    console.log('Ist die "20" enthalten im Array -->' + include20);
    console.log('Ist die "70" enthalten im Array -->' + include70);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion nimmt einen Abschnitt des Arrays
function slice() {
    //Ein Array von Früchten
    let Früchte = ['Apfel', 'Banane', 'Mango', 'Kiwi', 'Wassermelone'];

    //Das Array ausgeben
    console.log(Früchte);

    //Ein Abschnitt des Arrays entnehmen zwischen 1 und 4
    let slicedFrüchte = Früchte.slice(1, 4);

    //Ausgeben was Ausgeschnitten wurde
    console.log('Die Extrahierten Früchte: ' + slicedFrüchte);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion entfernt und/oder fügt Elemente in ein Array hinzu
function splice() {
    //Array von Farben
    let Farben = ['Grün', 'Rot', 'Blau', 'Gelb', 'Lila'];

    //Das Array vor der Veränderung anzeigen
    console.log(Farben);

    //Die Methode verwendet man, um Elemente zu entfernen und/oder hinzuzufügen
    var entfernteFarben = Farben.splice(2, 2); // Entferne 2 Elemente ab Index 2
    var zugefügteFarben = Farben.splice(1, 0, 'Pink', 'Schwarz'); // Füge 'Pink' und 'Schwarz' an Index 1 ein

    //Das Array nach den Veränderungen anzeigen
    console.log(Farben);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Zeigt Eigenschaften eines Projekts
function In() {
    // Ein einfaches Objekt von einem Auto
    let Auto = {
        Marke: 'Audi',
        Farbe: 'Schwarz',
        PS: '180'
    };

    // Verwenden von "in" zum Überprüfen, ob ein Schlüssel im Objekt vorhanden ist
    for (let k in Auto) {
        console.log(k + ': ' + Auto[k]);
    }

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Gibt das Array aus, Zeile für Zeile
function Of() {
    let Früchte = ['Apfel', 'Banane', 'Orange', 'Erdbeere', 'Kiwi'];

    // Verwenden von "of" zum Iterieren über die Elemente des Arrays
    for (let f of Früchte) {
        console.log(f);
    }

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion gibt dann ganze Array verdoppelt wieder zurück
function Mapfunction() {
    // Array mit Zahlen
    let Zahlen = [1, 2, 3, 4, 5];

    // Verwendung zum Verdoppeln jeder Zahl im Array
    let doppel = Zahlen.map(function (Zahlen) {
        return Zahlen * 2;
    });

    //Ausgabe des Ursprünglichen Arrays und des Verdoppeltem Arrays
    console.log(Zahlen);
    console.log(doppel);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Eine Funktion die nur die geraden Zahlen aus einem Array ausgibt
function FilterBool() {
    // Array aus Zahlen
    let Zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 19, 24, 37, 42, 55, 68];

    // Verwendung der filter-Funktion, um nur gerade Zahlen zu behalten
    let gerade = Zahlen.filter(function (Zahl) {
        return Zahl % 2 === 0;
    });

    //Ausgeben der Geraden Zahlen im Array
    console.log(gerade);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion trennt einen Satz in einzelne Wörter und baut sie wieder zusammen in einen ganzen Satz
function stringJoinSplit() {
    // Ein einfacher String
    let Satz = "Hallo, wie geht es dir heute?";

    // Die split-Methode, um den Satz in ein Array von Wörtern zu teilen
    var Wort = Satz.split(' ');
    console.log('Array von Wörtern:', Wort);

    // Die join-Methode, um die Wörter wieder zu einem Satz zu verbinden
    var verbundenerSatz = Wort.join(' ');
    console.log('Verbundener Satz:', verbundenerSatz);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion gibt ein Zahlen Array und ein String rückwärts an
function reverse() {
    // Ein einfaches Array
    let Zahlen = [1, 2, 3, 4, 5];
    console.log('Ursprüngliches Array:', Zahlen);

    // Verwendung der reverse-Methode für das Array
    let verkehrteZahlen = Zahlen.reverse();
    console.log('Umgekehrtes Array:', verkehrteZahlen);

    // Ein einfacher String
    let text = "Hallo, Welt!";

    // Verwendung der split, reverse und join Methoden für den String
    let verkehrterText = text.split('').reverse().join('');
    console.log('Ursprünglicher Text:', text);
    console.log('Umgekehrter Text:', verkehrterText);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}

//Diese Funktion gibt die Summe des ganzes Arrays wieder
function reduce() {
    // Array mit Zahlen
    let Zahlen = [1, 2, 3, 4, 5, 6, 7, 9, 12, 17];

    // Die reduce-Funktion wird verwendet, um die Summe der Zahlen zu berechnen
    let summe = Zahlen.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Anzeigen der Summe in der Konsole und auf der Webseite
    console.log(summe);

    //Zum trennen der einzelnen Funktionen
    console.log("--------------------------------")
}