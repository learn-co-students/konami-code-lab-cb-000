const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var entered;
  var body = document.body;

  var index = 0;

  var key;
  getInput();

  function keyHandler(key) {
    if (key === code[index]) {
      index++;
      console.log(index);
      if (index === code.length) {
        console.log("done");
        window.alert("done");
        index = 0;
      }
    } else {
      index = 0;
      //  getInput();
    }
  }


  //getInput(entered = []);
  function getInput() {

    body.addEventListener('keydown', function(e) {

      //	console.log(e.which);
      key = parseInt(e.detail || e.which);
      keyHandler(key);


    });
  }



}
