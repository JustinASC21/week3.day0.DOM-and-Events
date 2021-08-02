// get document

let doc = document.querySelector("html");

// get image
let image = document.querySelector("#rengar");

// on click listener
doc.onclick = function() {
    alert("You've been deleted!");
    image.src = "assets/rengar.png";
    }