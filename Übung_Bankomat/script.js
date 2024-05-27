
class Bankomant {
    constructor() {
        this.kontostand = 0.0;
    }
}


einzahlen(betrag) {
    if(betrag > 0) {
        this.kontostand += betrag;
    console.log(${betrag.toFixed(2)} + "EUR wurden erfolgreich eingezahlt.")
} else {
 console.log("Betrag muss positive sein");

}
}

abheben(betrag) {
    if(betrag > 0) {
    
       if(this.kontostand >= betrag) {
            this.kontostand -= betrag;
            console.log(${betrag.toFixed(2)} + "EUR wurden erfolgreich abgehoben.");

        } else  {
            console.log("Unzureichender Kontostand.");
        }
    } else  {
        console.log("Der Betrag muss positiv sein.");
    }
}

kontostandanzeigen() {
    
}