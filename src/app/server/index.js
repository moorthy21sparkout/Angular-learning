const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');
const {faker} = require('@faker-js/faker');
const { Server } = require('typescript');

const io = new Server();


io.on("connection",(socket)=>{
    console.log("socket is connected");
    
})