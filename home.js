var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");
var artistDrop = document.getElementById("artist_drop");
var albumDrop = document.getElementById("album_list");
var yellowBox = document.getElementById("yellowNav");
var blueBox = document.getElementById("sidebluenav");



homeLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  addView.classList.add("hidden");

  homeView.classList.add("visible");
  homeView.classList.remove("hidden");

  yellowBox.classList.remove("hidden");
  yellowBox.classList.add("visible");
  
  sidebluenav.classList.remove("hidden");
  sidebluenav.classList.add("visible");
 
  addButton.classList.add("hidden");
  albumInput.classList.add("hidden");

  artistDrop.classList.remove("hidden");
  albumDrop.classList.remove("hidden");

});