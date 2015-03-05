
function createObject(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id);
  js_req.send();
  js_req.addEventListener("load", handleResponse, false);
  
};

function saveObject(object) {
  var js_req = new XMLHttpRequest
  js_req.open("get", "http://localhost:4567/students/" + object.id + object.name + object.age + object.github)
  js_req.send()
  JSON.parse(js_req.response)
};

var handleResponse = function(e){
    json = JSON.parse(e.target.response)
  }