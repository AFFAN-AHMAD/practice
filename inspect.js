const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    let url = req.url;
    res.setHeader("content-type", "text/html")
  if (url == "/") {
    fs.readdir(".", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      data.forEach((ele) => {
        res.write(`<li>${ele}</li>`);
      });
        res.end()
    });
  } else if (url == "/public") {
      fs.readdir("./public", "utf-8", (err, data) => {
      
      if (err) {
        console.log(err);
      }
      data.forEach((ele) => {
        res.write(`<li>${ele}</li>`);
      });
        res.end()
    });
  } else if (url == "/public/other") {
      fs.readdir("./public/other", "utf-8", (err, data) => {
          if (err) {
              console.log(err);
          }
        //   res.setHeader("content-type", "text/html")
              
     
    });
  }
});

server.listen(8080, () => {
  console.log("server has been started");
});
