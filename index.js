const http = require("http"),
axios = require("axios");

http.createServer((req,res)=>{
    res.write("Users Emails"+ "\n")
    res.write(emails.join("\n")+"\n");
    res.write("\n"+"User NAMES"+"\n");
    res.write(users.join(", "));
    res.end()
}).listen(8000);

let users = [];
let emails = [];

(async function getNames(){
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name)
        emails = data.map(user=>user.email)
    }catch(error){
        console.log(error)
    }
})()