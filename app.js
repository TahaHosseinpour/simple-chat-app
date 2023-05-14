const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index2.html");
});

io.on("connection", (socket) => {
    console.log("A client has connected");

    socket.on("data", (data) => {
        console.log(`Message received from ${data.username} : `, data.message);
        io.emit("mess",data);
    });
});
const PORT = 3000;
http.listen(PORT,() =>{
    console.log(`listening to port ${PORT}`);
})