

const data2 = "Das leben ist schön";

let arr = data2.split("");
let result ="";

for (let i = 0;i < arr.length;i++) {
    if(arr[i] == "D"){
        result =+ "DD";
    } else if(arr[i] == "a"){
        result =+ "aa";
    } else if(arr[i] == "s"){
        result =+ "ss";
    } else if(arr[i] == "l"){
        result =+ "ll";
    } else if(arr[i] == "e"){
        result =+ "ee";
    } else if(arr[i] == "b"){
        result =+ "bb";
    } else if(arr[i] == "n"){
        result =+ "n";
    } else if(arr[i] == "i"){
        result =+ "i";
    } else if(arr[i] == "t"){
        result =+ "tt";
    } else if(arr[i] == "c"){
        result =+ "cc";
    } else if(arr[i] == "h"){
        result =+ "hh";
    } else if(arr[i] == "ö"){
        result =+ "öö";
    }
    if(arr[i] == " "){
        result == "_"
    }
} console.log(result)

const data1 ="4,9,-3,-9,-5,10,2,1,14";
let arr2 = data1.split(",")

let number = 0
for (let i = 0; i < arr2.length; i++) {
    if(parseInt(arr2[i])%8 == 0 && parseInt(arr2[i]) < 0) {
        number == arr2[i];
    }
    
   let result3 = number /= parseInt(arr2[i]);

   console.log(result3);
}

const data3 = "Das Leben ist schön";

let words = data3.split("");
let count = 0;
result2 = "";
for (let i = 0; i < words.length; i++) {
    if(words[i] == "ä" ){
        count =+ 1
    } 
    else if(words[i] == "ö" ){
        count =+ 1
    } 
    else if(words[i] == "ü" ){
        count =+ 1
    }
    else if(words[i] == "ä"){
        result2 =+ ae
    } 
    else if(words[i] == "ö"){
        result2 =+ oe
    } 
    else if(words[i] == "ü"){
        result2 =+ ue
    }

    console.log(result2)
} console.log(count);


