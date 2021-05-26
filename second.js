var randomNumber = Math.floor(Math.random() * 2) + 1;

var randomImage = randomNumber + ".png";

var image = document.querySelector("img");

image.setAttribute("src", randomImage);

if (randomNumber === 2) {
    document.querySelector("h2").innerHTML = "tails";
} else {
    document.querySelector("h2").innerHTML = "heads";
}