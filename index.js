const http = require('http') ; 
const fs = require('fs');
const path = require('path');
http.createServer((req, res) =>{
    console.log(req.url);

    if(req.url ==='/'){ // home page

       fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{

        if (err) throw err ;
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content)

       })
    }

    else if (req.url ==='/api'){
        fs.readFile(path.join(__dirname,'public','universityDB.json'),(err,content)=>{

            if (err) throw err ;
           res.writeHead(200, {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})
            res.end(content)
    
           })
    
    }
    else{
        res.end("<h1> 404 Nothing is here </h1>")
    }

    

}).listen(1491,()=>console.log("Great our Server is running on port 1491"));

 
