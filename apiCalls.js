 async function getProductData(){
    // let data = await fetch("https://dummyjson.com/products");
    // let result = await data.json();
    // console.log("receivedData", result);
    
     await fetch("https://dummyjson.com/products")
    .then((e) => e.json()).then((e1) => console.log(e1.products))

}
