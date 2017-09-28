const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let codeIndex = 0

function init() {
  // Write your JavaScript code inside the init() function
  const main = document.querySelector('body')
  main.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === code[codeIndex]) {
    codeIndex++

    if (codeIndex === code.length) {
      alert("You found the hidden treasure!")
      codeIndex = 0
    }
  } else {
    codeIndex = 0
  }
}
