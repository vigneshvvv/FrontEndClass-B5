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
