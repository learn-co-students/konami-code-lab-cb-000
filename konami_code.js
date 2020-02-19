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
  document.addEventListener("keydown", function onKeyDownHandler(e) {
    var index = 0;
    const key = parseInt(e.detail || e.which)
    for(var i = 0; i < code.length; i++){
      if (key === code[index]) {
        alert("Congratulations! You are right!");      
      }
    }     
});
}
init();
