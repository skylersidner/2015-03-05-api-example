
function createObject(id) {
  var js_req = new XMLHttpRequest
  var change
  js_req.open("get", "http://localhost:4567/students/" + id)
  js_req.send()
  JSON.parse(js_req.response)
}