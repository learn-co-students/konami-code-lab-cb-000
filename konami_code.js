const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  
  const body = document.querySelector("body");
  
  body.addEventListener("keydown", function(event) {
    onKeyDownHandler(event);
  })
  
  let index = 0;

  function onKeyDownHandler(event) {
    const key = parseInt(event.which || event.detail);  // in future should use event.key which returns the actual key, eg. 's' or 'ArrowUp'

    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert("Initiating hyper speed!");
      } 
    } else {
      index = 0;
    }
  }
}
