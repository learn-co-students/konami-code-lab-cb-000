
  const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  function init() {
    // your code here	  let index= 0
  }
      document.body.addEventListener("keydown", function(e){
      const key = e.key

        index = (codes[index] === key) ? ++index : 0

        if (index === codes.length) {
        window.alert("Hurray!");
        index = 0
      }

      });
   }
