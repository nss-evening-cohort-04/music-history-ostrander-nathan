var songs = [];
var newSongs = [];
var removed = [];
var songDiv  = document.getElementById("yellowNav");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Turn Away > Beck on the album Morning Phase");
songs.unshift("Scratching Circles> Jd McPherson on the album Signs & Signafiers")
console.log(songs);

function allSongs(){
	console.log("inside allsongs", songs)
	for (var i = 0; i < songs.length; i++) {
	newSongs = songs[i].replace(">", "-")
		.replace("*","")
		.replace("!","")
		.replace("(","")
	
	songDiv.innerHTML+=newSongs;


	}
}

allSongs();

	document.getElementById("yellowNav")


