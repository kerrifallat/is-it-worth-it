console.log("javascript is working!")
// When the user scrolls down 20px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("titleheader").style.fontSize = "40px";
  } else {
    document.getElementById("titleheader").style.fontSize = "90px";
  }
}
var add = (function () {
	var counter = 0;
	return function () {return counter += 1;}
  })();
  
  function myFunction(){
	document.getElementById("hyperlink").innerHTML = add();
  }