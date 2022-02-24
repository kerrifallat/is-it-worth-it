console.log("javascript is working!")

let emma="person";
let today = new Date();
let hour = today.getHours();
let message;
let messageContainer = document.getElementById("message");

if (hour >=18) {
    //if the hour,which ive called up top as a varaible, is greater than 6pm, then set the variabke message equal to good evening.
		message = "good evening :-)"
} else if (hour >=12) {
		message = "good afternooon"
} else {
		message = "good morn!"
}

messageContainer.innerHTML = message;
