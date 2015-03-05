
function createObject(id) {
  var js_req = new XMLHttpRequest
  js_req.open("get", "http://localhost:4567/students/" + id)
  js_req.send()
  JSON.parse(js_req.response)
}

function saveObject() {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/15/save");
  js_req.send();
  
  // Request was sent.
  // Sinatra matched route.
  // Route was run.
  // Ruby ran.
  // DB updated.
  // Student hash was defined.
  // Student hash to_json
  // json of student is returned
  // that return is sent back to the js_req object
  // js_req object stores the return in its "response" property.
  
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Information updated for " + r.name + "! Age is now " + r.age + ".");
  }, false);
}


