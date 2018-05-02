const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.querySelector('body')
  var index = 0
  input.addEventListener('keydown', function(e) {

    if (parseInt(e.detail || e.which) == code[index]) {
      index++

      if (index == code.length) {
        alert(`Congrats!`)
      }
    }else {
      index = 0
    }
  })
}
