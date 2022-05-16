async function LoadIntoTable(url,table){
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
}

LoadIntoTable("https://8000-diegonaza-iwalabs-q9t94353zmc.ws-eu45.gitpod.io/users",document.querySelector("table"));