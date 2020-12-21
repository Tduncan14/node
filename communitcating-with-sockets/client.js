const { Socket } = require("dgram");
const net = require("net");
const dgram = require('dgram');

const HOSTNAME = "localhost";
const PORT = 3000;
// const socket = net.connect(PORT,HOSTNAME);


// socket.write("World");

// socket.on("data",(data) => {

//     console.log(data.toString());
// })
// ;

const socket = dgram.createSocket('udp6');




socket.bind(PORT);