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
