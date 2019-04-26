const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', konamiCode);
}
index = 0
function konamiCode(e){
  var key = e.key;
  if (key === codes[index] && key === "a"){
    alert ("Nice job inputting the code")
  }
  else if (key === codes[index]){
    index += 1
  }
  else {index = 0}
}
