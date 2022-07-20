const http = require("http");
const fs = require("fs");
const sendRespones = (filename,statusCode,response) => {
  fs.readFile(`./html/${filename}`,(error ,data)=>{
    if(error){
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry,internal error");
    }else{
      response.statusCode = statusCode;
      response.setHeader("Content-Type", "text/html");
      response.end(data);


    }



  });


};

const server = http.createServer((request,response)=>{
  console.log(request.url, request.method);
  const method = request.method;
  const url = request.url;
  if(method === "GET"){
    if(url === "/"){
      sendRespones("index.html",200,response);
    }else if (url === "/about.html"){
      sendRespones("about.html",200,response);
    }else{
      sendRespones("404.html",404,response);
    }

  }else{

  }



  // response.end("Hello From NodeJS Server");

});

const port = 3000
const ip = "127.0.0.1"

server.listen(port, ip, ()=>{
  console.log(`server is running at http://${ip}:${port}`);


});


