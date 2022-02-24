console.log("javascript is working!")

let color=pink;
let count = 0
let message = document.getElementById("the-internet");

document.body.addEventListener("click", theInternetIs)

function theInternetIs() {
	count++
	if (message.innerHTML === "the internet is in the ground") {
		message.innerHTML = "the internet is in the clouds";
		message.classList.add("cloud-texture");
	} else if (count >=3) {
		message.innerHTML = "click this page to find out where the internet is...";
	} else {
		message.innerHTML = "the internet is in the ground";
		if (message.classList.contains("cloud-texture")) {
			message.classList.remove("cloud-texture");
		}
	}
}
