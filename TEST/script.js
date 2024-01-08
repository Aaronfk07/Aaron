
let kleinerGleich12 = 0;
let groesserAls12 = 0;


const anzahlIterationen = 10; 


for (let i = 0; i < anzahlIterationen; i++) {
  const zufallszahl = Math.floor(Math.random() * 11) + 5;


  if (zufallszahl > 12) {
    console.log(`Zufallszahl ${zufallszahl} ist größer als 12`);
    groesserAls12++;
  } else {
    kleinerGleich12++;
  }
}
console.log(`Anzahl der Zahlen kleiner-gleich 12: ${kleinerGleich12}`);
console.log(`Anzahl der Zahlen größer als 12: ${groesserAls12}`);
