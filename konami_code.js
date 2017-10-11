const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var i = 0;

  document.body.addEventListener('keydown', function(e) {
    var stroke = parseInt(e.detail);

    if (code[i] === stroke) {
      i++;

      if (i === code.length) {
        alert('Hurray!');
        i = 0;
      }
    }

    else {
      i = 0;
    }
    
  });

}
