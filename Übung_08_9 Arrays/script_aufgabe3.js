let array = [7,-10,13,8,4,-7,-12,-3,3,-9,6,-1,-6,7];

let res = ("");
let hit = Infinity;

for (let i = 0; i < array.length; i++) {
    if(Math.abs(array[i]) < Math.abs(hit)) {
        hit = array[i];
    }
    
}

console.log(hit);

