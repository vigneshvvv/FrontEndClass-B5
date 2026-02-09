console.log("The JavaScript file is working")

const name  = "sfdssg";
let nameNew = "Kumar";
let arr = [20, 3,23,43]

console.log(nameNew);
console.log(arr)

if(nameNew === "vignesh"){
    console.log("value matches");
}else if(nameNew === "Kumar"){
    console.log("Value matches", nameNew)
}else{
    console.log("Value doesn't matches")
}


for(let i = 0;i < arr.length; i++){
    // console.log("array elements",arr[i]);
}

for(let a of arr){
    console.log(a)
}

let sample = {
    name: "adasda",
    exp: 10
}

for(key in sample){
    console.log(key, sample[key]);
}


let jsonSample = [
    {
        userId: 1,
        userName: "vignesh",
        password: "vignesh"
    },
    {
        userId: 2,
        userName: "Kumar",
        password: "kumar"
    },
    {
        userId: 3,
        userName: "fdsdfas",
        password: "seffefsdsdfdsf"
    }
]




let result = false;
for(let js of jsonSample){
    if((js.userName === "vignesh" && js.password === "vignesh") || (js.userName === "Kumar" && js.password === "kumar")){
        result = true;
    }
}

if(result){
    console.log("login successful");
}else{
    console.log("Either username or password is incorrect");
}


// 10 - Integer
// "vignesh" - String
// true or false - boolean
// array - [10, 20, 20]
// json - {
//     "name": "afasfsa",
//     "email": "abc@gmail.com",
//     "mobile": 3412242
// }


let nestedJson = [
    {
         userId: 1,
        userName: "vignesh",
        password: "vignesh",
        profession: {
            Exp: 4,
            workLocation: "chennai",
            WFH_Allowed: false 
        }
    },
    {
         userId: 2,
        userName: "svdsvsdcdc",
        password: "vvsdvsdv",
        profession: {
            Exp: 6,
            workLocation: "HYD",
            WFH_Allowed: false 
        }
    },
    {
         userId: 3,
        userName: "gsfdfsdfs",
        password: "vignesh",
        profession: {
            Exp: 5,
            workLocation: "Madurai",
            WFH_Allowed: false 
        }
    }
    
]

for(let i of nestedJson){
    if(i.profession.workLocation === "chennai"){
        i.profession.WFH_Allowed = true;
        console.log(i);
    }

}

let i = 0;
while(i <4){
    // console.log(i);
    i++;  
}

let sampleArray = [1,2,3,4,5]

let j = 0;
while(j < sampleArray.length){
    // console.log(sampleArray[j])
    j++;
}

sampleArray.forEach((e) => 
console.log(e)
);

let evenOdd = [10,40,33,9, 12]
let num = 0;

while(num < evenOdd.length){
    if(evenOdd[num] %2 != 0){
        console.log("odd number", evenOdd[num])
    }
    num++;
}

let nameN = "fedfsfds"
console.log(nameN.length)
console.log(nameN.toUpperCase())
console.log(nameN.toLowerCase())
console.log(nameN.charAt(0))
console.log(nameN[0])
console.log(nameN.startsWith("fed"))
console.log(nameN.endsWith("ds"))
console.log(nameN.includes("fs"))
console.log(nameN.slice(0, 3))
console.log(nameN.substring(4))

let s = " hi team "
console.log(s.replaceAll("hi", "hello"))
let n = s.replaceAll(" ", "")
let ef = n.split("")
console.log(ef)
console.log(s)
console.log(s.trim())
console.log(s.trimEnd())


// function concept


let resultNew = false;

function loginValidation() {
    for(let js of jsonSample){
    if((js.userName === "vignesh" && js.password === "vignesh") || (js.userName === "Kumar" && js.password === "kumar")){
      console.log("The username password match successful");
        return true;
    }
}
return false;
}

function multiplyFunction(a1,b1){
    return a1*b1;
}

// resultNew = loginValidation();
console.log(resultNew);

console.log(multiplyFunction(10,20))


