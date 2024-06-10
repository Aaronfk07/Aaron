const data1 = "14,3,12,8,9,11,,4,3,2,4,-3";

let arr = data1.split(",");

for(let i = 0; i < arr.length; i++) {
    if(parseInt(arr[i])  > 10 || parseInt(arr[i]) < 0) {
        console.log(arr[i]);
    }
}

const data2 = "Hans ist ein netter Kerl";

let arr2 = data2.split("");
console.log(arr2);
let result = "";
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] == "a") {
        result += "aa";
    } else if(arr2[i] == "a") {
        result += "ee";
    } else if(arr2[i] == "K") {
        result += "KKK";
    } else if(arr2[i] == "s") {
        result += "sss";
    } else {
        result += arr2[i];
    }
}
console.log(result);

const data3 = "4,9,10,2,1,14";

let numArr = data3.split(",");
let average = 0;
for(let i = 0; i < numArr.length; i++) {
    average += parseFloat(numArr[i]);
}

average /= numArr.length;
if(average > 20) {
    console.log("Huge");
} else if(average <= 20 && average >= 10) {
    console.log("Medium");
} else {
    console.log("ok");
}