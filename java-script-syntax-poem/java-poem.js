console.log("A poem about Quitting:--eleven days cigarette free--In his book 'EasyWay' Allen Carr guides and instructs me-- he claims a wild claim that process can be easy.--The pages mark the countdown of the days until I am at long last free.--They number each day until my life will be returned gracefully back to me.--I kiss each cigarette with a tender goodbye.--tell them its been fun- but I am ready to fly.")

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
  
