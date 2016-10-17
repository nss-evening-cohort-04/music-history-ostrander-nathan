var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  homeView.classList.add("hidden");
  addView.classList.add("hidden");
  addButton.classList.add("hidden");
  albumInput.classList.add("hidden");

  yellowBox.classList.remove("hidden");
  yellowBox.classList.add("visible");
  
  sidebluenav.classList.remove("hidden");
  sidebluenav.classList.add("visible");
  
  listView.classList.add("visible");
  listView.classList.remove("hidden");

  artistDrop.classList.remove("hidden");
  albumDrop.classList.remove("hidden");


});