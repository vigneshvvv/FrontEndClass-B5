 async function getProductData(){
    // let data = await fetch("https://dummyjson.com/products");
    // let result = await data.json();
    // console.log("receivedData", result);
    
     await fetch("https://dummyjson.com/products")
    .then((e) => e.json()).then((e1) => console.log(e1.products))

}


async function postTitleData(){
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify({
            userID: 11,
            id: 101,
            title: "sample testing",
            body: "sdfsasdsddsdasdsdsd"
        })
    }).then((response) => console.log(response))
}


 let id = 1;
async function putTitleData(){
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify({
            userID: 11,
            id: 1,
            title: "sample testing",
            body: "sdfsasdsddsdasdsdsd"
        })
    }).then((response) => console.log(response))
}
