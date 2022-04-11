console.log("A poem about Quitting")

let message = document.getElementById("i-quit");

// When the user scrolls down 20px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
      document.getElementById("titleheader").style.fontSize = "70pt";
    } else {
      document.getElementById("titleheader").style.fontSize = "200pt";
    }
  }
  

function iQuit() {
	
	if (message.innerHTML === "eleven days cigarette free") {
		message.innerHTML = "my countdown of the days until I'm free";
		message.classList.add("Released-at-last");
	} else if (count >=3) {
		message.innerHTML = "I kiss each cigarette goodbye.";
	} else {
		message.innerHTML = "ready-to-fly.";
		if (message.classList.contains("ready-to-fly.")) {
			message.classList.remove("ready-to-fly.");
		}
	}
}