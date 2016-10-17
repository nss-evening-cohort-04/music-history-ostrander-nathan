// var songs = [];
// var newSongs = [];
// var removed = [];
// var songDiv  = document.getElementById("yellowNav");

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.push(" Turn Away > Beck on the album Morning Phase");
// songs.unshift(" Scratching Circles> Jd McPherson on the album Signs & Signafiers")

// function allSongs(){
// 	console.log("inside allsongs", songs)
// 	for (var i = 0; i < songs.length; i++) {
// 	newSongs = songs[i].replace(">", "-")
// 		.replace("*","")
// 		.replace("!","")
// 		.replace("(","")
// 		.replace("@","")
	
// 	songDiv.innerHTML+=newSongs;
// 	}
// }
// allSongs();
var songData = {};
var songs2Data = {};
var currentProduct;
var currentCat;
var seasonDiscount = "";
var songDom = document.getElementById('yellowNav');
var $songDom = $('#yellowNav');

// XHR FUNCTIONS TO EXECUTE 
function executeThisCodeIfXHRFails() {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded() {
  // console.log("this.responseText:", this.responseText);
  songs2Data = JSON.parse(this.responseText);
  // makeSeasonOptions(songs2Data);
}

function executeThisCodeAfterFileLoaded1() {
  songData = JSON.parse(this.responseText);
  showDataInDOM();
}

// Function for making seasonal options in DOM
// function makeSeasonOptions(songs2Data) {
//   var saleData = "<option disabled selected value> -- select an option -- </option>";
//   var currentSale;
//   for (var i = 0; i < songs2Data.categories.length; i++) {
//     currentSale = songs2Data.categories[i];
//     saleData += `<option>${currentSale.season_discount}</option>`;
//   };
//   saleEmt.innerHTML = saleData;
// }

// function to show songs 
function showDataInDOM() {
  var productString = "";

  for (var i = 0; i < songData.songs.length; i++) {
    currentProduct = songData.songs[i];
    songDom.innerHTML = "";

    productString += "<div class=cardContent>";
    productString += `<h1>${currentProduct.artist}</h1>`;
    productString += `<h4>${currentProduct.title}</h4>`;
    productString += `<p>${currentProduct.album}</p>`;
    productString += "<div class=deleteBtn>";
	productString += `<button>Delete</button>`;
    productString += "</div>";
    productString += "</div>";
  };
  songDom.innerHTML = productString;
  buttonHandler();
}
function buttonHandler() {
	var deleteBtn;
	$(".cardContent .deleteBtn").click(function(){
     this.parentNode.remove();		
	})
	$("#yellowNav").append("<button id=moreBtn>More</button>");
	$("#yellowNav #moreBtn").click(showSongs2InDom);

};
function showSongs2InDom() {
	$("#moreBtn").hide();
  var productString2 = "";

  for (var i = 0; i < songs2Data.songs.length; i++) {
    currentProduct = songs2Data.songs[i];
    // songDom.innerHTML = "";

    productString2 += "<div class=cardContent>";
    productString2 += `<h1>${currentProduct.artist}</h1>`;
    productString2 += `<h4>${currentProduct.title}</h4>`;
    productString2 += `<p>${currentProduct.album}</p>`;
    productString2 += "<div class=deleteBtn>";
	productString2 += `<button>Delete</button>`;
    productString2 += "</div>";
    productString2 += "</div>";
  };
  // songDom.innerHTML = productString2;
  $($songDom).append(productString2);
  buttonHandler();
}



// XHR request Songs2 JSON
var songs2Request = new XMLHttpRequest();
songs2Request.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
songs2Request.addEventListener("error", executeThisCodeIfXHRFails)
songs2Request.open("GET", "songs2.json")
songs2Request.send();

// XHR request Songs JSON
var productRequest = new XMLHttpRequest();
productRequest.addEventListener("load", executeThisCodeAfterFileLoaded1); //Callback
productRequest.addEventListener("error", executeThisCodeIfXHRFails)
productRequest.open("GET", "songs.json")
productRequest.send();

