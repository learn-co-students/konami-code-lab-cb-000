const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.body

function init() {
	var index = 0

  body.addEventListener('keydown', function(e) {
  	const key = parseInt(e.which || e.detail)

  	if (key === code[index]) {
  		index++
  		if (index === code.length) {
  			alert('Congratulations')
  			index = 0
  		}
  	} else {
  		index = 0
  	}
  })
}

init()
