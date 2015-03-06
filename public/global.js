
function createObject(name, age, github) {
  var js_req = new XMLHttpRequest
  js_req.open("get", "http://localhost:4567/students/create/" + name + "/" + age + "/" + github)
  js_req.send()
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    alert("Information updated for student number" + r.id + "! Name: " + r.name + ", Age: " + r.age + ", Github: " + github + ".");
  }, false);
}

function saveObject(id, name, age, github) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/save/" + name + "/" + age + "/" + github);
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
    alert("Information updated for student number" + r.id + "! Name: " + r.name + ", Age: " + r.age + ", Github: " + github + ".");
  }, false);
}

function ultraWise(id) {
  var js_req = new XMLHttpRequest;
  js_req.open("get", "http://localhost:4567/students/" + id + "/wise");
  js_req.send();
  js_req.addEventListener("load", function(){
    r = JSON.parse(js_req.response);
    if (r["wise"] === true) {
      alert("Yay, they're wise!");
    } else {
      alert("Sorry, you're not wise!");   
    };
  }, false);
} 

