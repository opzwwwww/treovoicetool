var http = require("http");

http.createServer(function (req, res) {
    res.write("ditmemay");
    res.end();
  })
  .listen(8080);
