const urlNew = "https://diegoiwaca2.herokuapp.com/workouts/";

async function LoadIntoTable(url,table){
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
    //clear table
    tableBody.innerHTML = "";

    //populate rows
   //for each object in the response
    for(const UserData of data){
        //counter to check if the first element of the table row
        let counter = 0;
        //create a new row to add the element
       const rowElement = document.createElement("tr");
       //for each key value in the json response, we will add it to a cell in the table
       Object.entries(UserData).forEach(([key, value]) => {
           //exclude this auto generated key from being added to the table
       if(key != "__v"){
           //if is the first key we know it is the ID, so we want to add a on click function that will help with the delete method in the future
           if(counter ==0 ){
               //create a table data
            let cellElement = document.createElement("td");
            //set the table data  text content to the value of that key
            cellElement.textContent = value;
                //append the value to the row element
                rowElement.appendChild(cellElement);
                cellElement.onclick=function(){
                    document.getElementById("fieldidtodelete").value = cellElement.textContent;
                    
                }
                //append this row to the table body
                tableBody.appendChild(rowElement);

           }else{
            let cellElement = document.createElement("td");
            cellElement.textContent = value;
                rowElement.appendChild(cellElement);
                tableBody.appendChild(rowElement);
           }
      
       }
        counter++;
      });
       
    }

}
LoadIntoTable(urlNew,document.querySelector("table"));

//calls function that will add a workout to the table
document.getElementById("add-Button").onclick = function(){
    addWorkout(urlNew);
}

function addWorkout(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onload = () => console.log(xhr.responseText);
    let day = document.getElementById("fieldday").value;
    let exercise = document.getElementById("fieldexercise").value;
    let series = document.getElementById("fieldseries").value;
    let rest = document.getElementById("fieldrest").value;

    let data = `{
        "day":"${day}",
        "exercise":"${exercise}",
        "series":"${series}",
        "rest":"${rest}"
    }`;

    xhr.send(data);

    //reload the table
    LoadIntoTable(urlNew,document.querySelector("table"));
    
  }

  //On click function delete button
  document.getElementById("delete-Button").onclick = function(){
    deleteWorkout();
}

  function deleteWorkout(){
    let id = document.getElementById("fieldidtodelete").value ;  
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", urlNew+id);
    
    xhr.onload = () => console.log(xhr.responseText);
    xhr.send();
    //reload the table
    LoadIntoTable(urlNew,document.querySelector("table"));
  }
