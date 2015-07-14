var songs = [];
var song_div = document.getElementById("song-info-wrapper");


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

for(var i = 0; i < songs.length; i++) {
  var addMusicFront = prompt("Type Song to add to Front or type exit to quit: ");
  var addMusicBack = prompt("Type Song to add to End or type exit to quit: ");
  
  if(addMusicFront.toLowerCase() === "exit"){
    break;
  }else {
    songs.unshift(addMusicFront);
  }
  
  if(addMusicBack.toLowerCase() === "exit"){
    break;
  }else {
    songs.push(addMusicBack);
  }
  
}

for(var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace(">", "-");
  songs[i] = songs[i].replace(/[(*!@]/g, "");
  song_div.innerHTML += "<span class='song-info'>"+ songs[i] + "</span>"
}

