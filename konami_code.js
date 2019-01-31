

 function init() {
   let index = 0;
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
