//Task 1
const data = "Hans geht heute schwimmen das ist gut";
let arr = data.split(" ");
let reverseArr= [];
for(let i = arr.length - 1; i >= 0; i--) {
    if(i == 0) {
        reverseArr.push(arr[i]);
    } else {
        reverseArr.push(arr[i] + " ");
    }
}
console.log(reverseArr);

let output = "";
for(let i = 0; i < reverseArr.length; i++) {
    output += reverseArr[i];
}
console.log(output);



//Task 2
const numbers = "8,2,1,4,6,1,8,7,8,10";
let numberarr = numbers.split(",");
console.log(numberarr);
let biggestNumber = 0;
let count = 0;
for(let i = 0; i < numberarr.length; i++) {
    if(parseInt(numberarr[i]) > biggestNumber) {
        biggestNumber = parseInt(numberarr[i]);
    }
}
for(let i = 0; i < numberarr.length; i++) {
    if(numberarr[i] == biggestNumber) {
        count++;
    }
}
console.log("BIggest number: " + biggestNumber);
console.log("Biggest Number count: " + count);


//Task 3
const temperatures = "-1,5,51,-10,-11,2,90,-8,-44";
-1, 5, -10, -11, 2, -8
let temparr = temperatures.split(",");
console.log(temparr);
let sum = 0;
let counter = 0;
for(let i = 0; i < temperatures.length; i++) {
    if(temparr[i] >= -30 && temparr[i] <= 50) {
        sum += parseInt(temparr[i]);
        counter++;
    }
}
console
let avg = sum / counter;
console.log("Mittelwert: " + avg);