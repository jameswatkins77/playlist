document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
  addAlbums();
})

var aAlbum = document.getElementById('album_a');
var bAlbum = document.getElementById('album_b');
var cAlbum = document.getElementById('album_c');
var dAlbum = document.getElementById('album_d');
var eAlbum = document.getElementById('album_e');
var albumList = document.getElementById('listAlbums');
var clearIt = document.getElementById('clear');
var submitted = document.getElementById('submit');


var addAlbums = function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        var results = JSON.parse(request.responseText);
        arr = results.results;
        var albumA_Pic = arr[0].cover_art;
        var albumB_Pic = arr[1].cover_art;
        var albumC_Pic = arr[2].cover_art;
        var albumD_Pic = arr[3].cover_art;
        var albumE_Pic = arr[4].cover_art;
        aAlbum.innerHTML = "<img src=images/"+albumA_Pic+">";
        bAlbum.innerHTML = "<img src=images/"+albumB_Pic+">";
        cAlbum.innerHTML = "<img src=images/"+albumC_Pic+">";
        dAlbum.innerHTML = "<img src=images/"+albumD_Pic+">";
        eAlbum.innerHTML = "<img src=images/"+albumE_Pic+">";
      }
    }
  }
  request.open("GET", 'https://lit-fortress-6467.herokuapp.com/object')
  request.send();
}

aAlbum.addEventListener("click", function(event){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = arr[0].artist +": "+ arr[0].title;
  albumList.appendChild(newAlbumListed);
})
bAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = arr[1].artist +": "+ arr[1].title;
  albumList.appendChild(newAlbumListed);
})
cAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = arr[2].artist +": "+ arr[2].title;
  albumList.appendChild(newAlbumListed);
})
dAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = arr[3].artist +": "+ arr[3].title;
  albumList.appendChild(newAlbumListed);
})
eAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = arr[4].artist +": "+ arr[4].title;
  albumList.appendChild(newAlbumListed);
})

clearIt.addEventListener("click", function(){
  albumList.innerHTML = "";
})

submitted.addEventListener("click", function(){
  alert("you can NOT pass!")
  request.open("POST", 'https://lit-fortress-6467.herokuapp.com/post');
  request.send();
})
