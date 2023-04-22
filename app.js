const express = require("express");

const app = express();

app.get("/", (req, res)=> {
    res.send("<h1>Express works inside of Docker conttainer!Added</h1>");
})

app.listen(5001, ()=>{
    console.log("App listenning port 5001.");
});