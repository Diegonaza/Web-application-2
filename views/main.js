async function LoadIntoTable(url,table){
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
    //clear table
    tableBody.innerHTML = "";

    //populate rows
    
    for(const UserData of data){
       const rowElement = document.createElement("tr");
        const cellElement = document.createElement("td");
        cellElement.textContent = UserData.username;
        rowElement.appendChild(cellElement); 
        tableBody.appendChild(rowElement);
    }

}

LoadIntoTable("https://8000-diegonaza-iwalabs-q9t94353zmc.ws-eu45.gitpod.io/users",document.querySelector("table"));