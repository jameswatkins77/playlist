document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
  addAlbums();
})

var firstAlbum = document.getElementById('album_1');
var secondAlbum = document.getElementById('album_2');
var thirdAlbum = document.getElementById('album_3');

var addAlbums = function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        var results = JSON.parse(request.responseText);
        var arr = results.results;
        var random1 = Math.floor(Math.random()*arr.length);
        var random2 = Math.floor(Math.random()*arr.length);
        var random3 = Math.floor(Math.random()*arr.length);
        for(var i = 0; i < 28; i++){
          if(random1 === random2){
            random2 = Math.floor(Math.random()*arr.length);
          }
          if(random3 === random1 ||  random3 === random2){
            random3 = Math.floor(Math.random()*arr.length);
          }
        }
        var albumOnePic = arr[random1].cover_art;
        var albumTwoPic = arr[random2].cover_art;
        var albumThreePic = arr[random3].cover_art;
        firstAlbum.innerHTML = "<img src=images/"+albumOnePic+">";
        secondAlbum.innerHTML = "<img src=images/"+albumTwoPic+">";
        thirdAlbum.innerHTML = "<img src=images/"+albumThreePic+">";
      }
    }
  }
  request.open("GET", 'https://lit-fortress-6467.herokuapp.com/object')
  request.send();
}
