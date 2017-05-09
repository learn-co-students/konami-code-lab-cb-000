const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

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
