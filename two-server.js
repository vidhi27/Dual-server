const http = require("http");
const PORTONE = 7000;
const PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end("You're a Coding Master");
  }
  
  function handleRequestTwo(request, response) {
    response.end("'Someone is under the weather today'");
  }

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function(){
    console.log("Server listening on: http://localhost:" + PORTTWO);

});