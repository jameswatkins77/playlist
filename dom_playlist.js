document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
})

var aAlbum = document.getElementById('album_a');
var bAlbum = document.getElementById('album_b');
var cAlbum = document.getElementById('album_c');
var dAlbum = document.getElementById('album_d');
var eAlbum = document.getElementById('album_e');
var albumList = document.getElementById('listAlbums');
var clearIt = document.getElementById('clear');
var submitted = document.getElementById('submit');
var artistID;

var findArtistID = function(cb){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        var results = JSON.parse(request.responseText);
        artistID = results.artists.items[0].id;
        cb();
        return artistID;
      }
      return artistID;
    }
  }
  var artistSearch = document.getElementById('inputi').value;
  request.open("GET", 'https://api.spotify.com/v1/search?q='+artistSearch+'&type=artist');
  request.send();
}

var results;
var findArtistAlbums = function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        results = JSON.parse(request.responseText);
        for (var i = 0; i < results.items.length; i++) {
          aAlbum.innerHTML = `<img src =" ${results.items[0].images[0].url}" alt='image'>`;
          bAlbum.innerHTML = `<img src =" ${results.items[1].images[0].url}" alt='image'>`;
          cAlbum.innerHTML = `<img src =" ${results.items[2].images[0].url}" alt='image'>`;
          dAlbum.innerHTML = `<img src =" ${results.items[3].images[0].url}" alt='image'>`;
          eAlbum.innerHTML = `<img src =" ${results.items[4].images[0].url}" alt='image'>`;
        }
      }
    }
  }
  request.open("GET", 'https://api.spotify.com/v1/artists/'+ artistID +'/albums');
  request.send();
}

var postRequest = function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4) {
      if (request.status < 400) {
        var results = request.responseText;
        console.log(results);
      }
    }
  }
  request.open("POST", 'https://lit-fortress-6467.herokuapp.com/post')
  request.send();
}

search.addEventListener("click", function(){
  findArtistID(findArtistAlbums);
})

aAlbum.addEventListener("click", function(event){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = results.items[0].name;
  albumList.appendChild(newAlbumListed);
})

bAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = results.items[1].name;
  albumList.appendChild(newAlbumListed);
})

cAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = results.items[2].name;
  albumList.appendChild(newAlbumListed);
})

dAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = results.items[3].name;
  albumList.appendChild(newAlbumListed);
})

eAlbum.addEventListener("click", function(){
  var newAlbumListed = document.createElement("p");
  newAlbumListed.innerHTML = results.items[4].name;
  albumList.appendChild(newAlbumListed);
})

clearIt.addEventListener("click", function(){
  albumList.innerHTML = "";
  aAlbum.innerHTML = "";
  bAlbum.innerHTML = "";
  cAlbum.innerHTML = "";
  dAlbum.innerHTML = "";
  eAlbum.innerHTML = "";
})

submitted.addEventListener("click", function(){
  postRequest();
})
