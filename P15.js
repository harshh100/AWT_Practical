const express = require('express');
const helmet = require('helmet');
const https = require('https');
const path = require('path');
const fs=require('fs');
const bodyParser = require("body-parser");
const { Server } = require('http');
const hostname = '127.0.0.1';
const port = 4000;

// New app using express module
const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended:true
}));

// * Task *
//CORS  process from bing and block from chrome  generate blacklist and whitelist  



//Command to generate SSl certificate:
// openssl genrsa -out key.pem
// openssl req -new -key key.pem -out csr.pem
// openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");

})

const SSLserver =https.createServer({

    key : fs.readFileSync(path.join(__dirname,'cert1','key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'cert1','cert.pem'))
},app)


// SSlserver.listen(8000,()=> {
//     console.log('Secure server 🚀🗝️ running on port 8000');
// })

SSLserver.listen(port, function(){
    console.log(`Secure server 🚀🗝️ is running on https://${hostname}:${port}/`);
    
  })

