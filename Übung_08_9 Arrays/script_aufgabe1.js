let data = "ATGCTTCAGAAAAGGTCAGCG"

let letters = data.split("");

console.log(letters);

let counts = { "A": 0, "C": 0, "G": 0, "T": 0}

for (let i = 0; i < letters.length; i++) {
    let DNA  = letters[i];
    counts[DNA] ++;
    
}

let output = counts ["A"] + " " + counts ["C"] + " " + counts ["G"] + " " + counts ["T"];

console.log(output);