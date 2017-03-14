const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelector('body')
  var i = 0
  body.addEventListener('keydown', function(event) {
      const key = parseInt(event.detail || event.which)

      if(key === code[i]){
        i++
        if (i === code.length - 1) {
          alert("CONGRATULATIONS!!!")
          i = 0
        }
      } else {
        i = 0
      }
    })
}
