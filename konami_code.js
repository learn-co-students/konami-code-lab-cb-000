const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function init() {
  const body = document.getElementByTagName('body')
  
  body.addEventListener('keydown', function onKeyDownHandler(e){
    var stroke = parseInt(event.detail);
    if (stroke === codes[index]) {
      index++;
      
    if (index === codes.length) {
      alert("Hurray!");
      
      index = 0;
    }
    } else {
      index = 0;
    }
    }
  )
}
