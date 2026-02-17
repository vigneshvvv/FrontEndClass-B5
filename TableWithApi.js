async function getTableData(){

    let data = await fetch("https://dummyjson.com/users");
    let output = await data.json()
    let result = await output.users
    console.log(result)

    result.forEach(element => {
        let table = document.getElementById("tdata");
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
         <td>${element.firstName}</td>
          <td>${element.lastName}</td>
           <td>${element.email}</td>
           <td>
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-primary">Delete</button>
           </td>
        `
       table.append(tr); 
    });
}

getTableData()
