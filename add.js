var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
// Add a <button> element at the bottom of the input fields labeled "Add".

var addButton = document.getElementById("add_button");
// Add a DOM element that contains some input fields for the user to enter in the 
// name of a song, the artist for the song, and the album. You do not need to enclose them in a
// <form> element because we're not actually submitting this form anywhere.
var albumInput = document.getElementById("album_input");
var albumInput2 = document.getElementById("album_input2");

var albumTextInput = document.getElementById("AlbumTextInput");
var artistInput = document.getElementById("ArtistInput");
var songInput = document.getElementById("SongNameInput");

var userInput;

// 4) The input fields and the add button make up the Add Music View.
addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");
  artistDrop.classList.add("hidden");
  albumDrop.classList.add("hidden");
  yellowBox.classList.add("hidden");
  sidebluenav.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");
  // make button visible and remove hidden class 
  addButton.classList.add("visible");
  addButton.classList.remove("hidden");
  // make input visible and remove hidden class
  albumInput.classList.add("visible");
  albumInput.classList.remove("hidden");


});
addButton.addEventListener("click", function(event){
	userInput = event.target.value;

});

albumTextInput.addEventListener("change", function(){

});
artistInput.addEventListener("change", function(){

});
songInput.addEventListener("change", function(){

});