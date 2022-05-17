async function LoadIntoTable(url,table){
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
    //clear table
    tableBody.innerHTML = "";

    //populate rows
    
    for(const UserData of data){
       const rowElement = document.createElement("tr");
       Object.entries(UserData).forEach(([key, value]) => {
       if(key != "__v"){
        let cellElement = document.createElement("td");
        cellElement.textContent = value;
            rowElement.appendChild(cellElement);
            tableBody.appendChild(rowElement);
       }
        
      });
       
    }

}
LoadIntoTable("https://8000-diegonaza-iwalabs-q9t94353zmc.ws-eu45.gitpod.io/workouts",document.querySelector("table"));


document.getElementById("add-Button").onclick = function(){
    myFunction("https://8000-diegonaza-iwalabs-q9t94353zmc.ws-eu45.gitpod.io/workouts/");
}
function myFunction(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onload = () => console.log(xhr.responseText);
    let day = document.getElementById("field1").value;
    let exercise = document.getElementById("field2").value;
    let series = document.getElementById("field3").value;
    let rest = document.getElementById("field4").value;

    let data = `{
        "day":"${day}",
        "exercise":"${exercise}",
        "series":"${series}",
        "rest":"${rest}"
    }`;
   
   
    
    xhr.send(data);
    LoadIntoTable("https://8000-diegonaza-iwalabs-q9t94353zmc.ws-eu45.gitpod.io/workouts",document.querySelector("table"));
   // document.getElementById("field2").value = document.getElementById("field1").value;
  }