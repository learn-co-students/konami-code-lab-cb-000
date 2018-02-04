const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.querySelector('body');
var index = 0;

function init() {
  body.addEventListener('keydown', keyDown)
}

function keyDown(event) {
  var key = parseInt(event.detail || event.which)
  console.log(key)

  if (code[index] === key) {
    console.log("YO");
    index++;
    console.log(index);

    if (index === code.length) {
      alert("Hurray!");
    }
  } else {
    index = 0;
  }
}
