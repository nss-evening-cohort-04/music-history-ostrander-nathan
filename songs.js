var songData = {};
var songs2Data = {};
var songs = [];
var $songDom = $('#yellowNav');
// Jquery to get songs 1st AJAX REQUEST
$.ajax({
  url: "songs.json"
}).done(functionIWantjQueryToExecute);
// Jquery to get songs2 2nd AJAX REQUEST
function newSongs() {
  $.ajax({
    url: "songs2.json"
  }).done(showSongs2InDom);
};
// Called by 1st AJAX
function functionIWantjQueryToExecute(songsData) {
  let songs = songsData.songs;
  // Loop through the array with jQuery
  $.each(songs, (key, song) => {
    $('#yellowNav').append(`<div class=cardContent><h1>${song.artist}</h1><h4>${song.title}</h4><p>${song.album}</p><div class=deleteBtn><button>Delete</button>`);
  });
  buttonHandler();
};
// Handles button event and calls 2nd Ajax
function buttonHandler() {
  $(".deleteBtn").click(function() {
    this.parentNode.remove();
  })
  $("#yellowNav").append("<button id=moreBtn>More</button>");
  $("#yellowNav #moreBtn").click(newSongs);

};
// Adds 2nd set of songs
function showSongs2InDom(songs2Data) {
  $("#moreBtn").hide();
  let songs = songs2Data.songs;
 // loop
  $.each(songs, (key, song) => {
    $('#yellowNav').append(`<div class=cardContent><h1>${song.artist}</h1><h4>${song.title}</h4><p>${song.album}</p><div class=deleteBtn><button>Delete</button>`);
  });
  buttonHandler();
};