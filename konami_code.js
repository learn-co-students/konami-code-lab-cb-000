const codes = [
  "ArrowUp",	  "ArrowUp",
  "ArrowUp",	  "ArrowUp",
  "ArrowDown",	  "ArrowDown",
  "ArrowDown",	  "ArrowDown",
  "ArrowLeft",	  "ArrowLeft",
  "ArrowRight",	  "ArrowRight",
  "ArrowLeft",	  "ArrowLeft",
  "ArrowRight",	  "ArrowRight",
  "b",	  "b",
  "a"	  "a"
];


 function init() {	function init() {
  // your code here	  let index = 0;
}
  document.body.addEventListener('keydown', function onKeyDownHandler(e){

     const key = e.key;

     if (key === codes[index]) {
      index++;

     if (index === codes.length) {
      window.alert("Hurray!");

       index = 0;
    }
    } else {
      index = 0;
    }
    }
  )
}
