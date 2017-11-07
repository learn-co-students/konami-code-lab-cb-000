const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var breaker = 0;

  document.body.addEventListener('keydown', function(event) {
    var stroke = parseInt(event.detail); //stroke is defined as an integer of the keydown event

    if (code[breaker] === stroke) { //if the key pressed is equal to the array index increment breaker by 1
      breaker++;

      if (breaker === code.length) { //if breaker integer is equal the length of the code array, alert the user they completed the code and reset i to 0
        alert('Hurray!');
        breaker = 0;
      }
    }

    else { //if key pressed is not equal the code array index, reset breaker to 0
      breaker = 0;
    }

  });

}
