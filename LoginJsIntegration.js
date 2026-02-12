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


let formOutput = document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event);
    let formData = new FormData(event.target);
    console.log(formData);

    let result = Object.fromEntries(formData.entries())
    console.log(result);

    let filter = jsonSample.find((e) => e.userName === result.userName && e.password === result.password);
    if(filter === undefined){
        console.log("username or password is incorrect")
    }else{
        console.log("Login successful");
    }
});
