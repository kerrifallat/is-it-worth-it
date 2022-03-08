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
let counter = 0;
let button = document.querySelector(".hyperlink");
console.log(counter);


button.addEventListener("click", addHyperLink);

function addHyperLink() {
	button.classList.toggle("red-border");
	counter++;
	console.log(counter);

	}
