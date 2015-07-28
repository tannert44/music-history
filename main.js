//var songs = [];
//var song_div = document.getElementById("song-info-content");
//
//songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
//songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
//songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
//songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
//songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
//
//songs.push("My Dick - by Mickey Avalon on the Album Dicks Like Jesus");
//songs.unshift("East to West - by Casting Crowns on the Album Praise You In the Storm");
//
//for(var i = 0; i < songs.length; i++) {
//  songs[i] = songs[i].replace(">", "-");
//  songs[i] = songs[i].replace(/[(*!@]/g, "");
//  song_div.innerHTML += "<span class='song-info'>" + songs[i] + "</span>";
//}
$('document').ready(function(){
  
  
  $.ajax({url: "music-info.json"}).done(function(data){
    
    $.each(data.songs, function(){
      var songOutput = "<span class='song-info'>" + this.name + " - by " + this.artist +" on the album " + this.album + "</span>" + "<div class='delete_button'><button>Delete</button></div>";
      $('#song-info-content').append(songOutput);
      $('.delete_button').on("click", function(){
             $(this).prev().remove();
             $(this).remove();
          });
    });
    
    
    
    $('#song-info-content').append("<button id='more_button'>More</button>");
    
    
    
    $('#more_button').on("click", function(){
      $.ajax({url: "music-info2.json"}).done(function(data){
        $.each(data.songs, function(){
          var songOutput2 = "<span class='song-info'>" + this.name + " - by " + this.artist +" on the album " + this.album + "</span>" + "<div class='delete_button'><button>Delete</button></div>";
          $('#more_button').before(songOutput2);
          
          $('.delete_button').on("click", function(){
             $(this).prev().remove();
             $(this).remove();
          });

        });
      });
    });
    
  });
  
});