const express = require("express");
const app = express();

//hosting on azure
const PORT = process.env.PORT || 3000;
app.use(express.json());
const cors = require("cors");
app.use(cors());
let messages = [];
let currentId = 1;
 
app.get("/api/messages", (req, res) => {
    console.log("retrieving messages");
    res.json(messages);
    res.status(200);
});
//CRUD
app.post("/api/message", (req,res) => {
    const { text } = req.body;
    if (!text){
        return res.status(400);
    }
    const newMessage = {
        id: currentId++,
        text,
        createdAt: new Date()
    };
    messages.push(newMessage);
    res.status(200).json(newMessage);
    console.log(newMessage);   
});
 
app.listen(PORT, () => {
    console.log("running on port:" + PORT);
})
