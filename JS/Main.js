
//Karakters.html klik functie

function onClick(id){
  var id = document.getElementById("popup" + id);
  if (id.style.display === "block"){
    id.style.display = "none";
  }else{
    id.style.display = "block";
  }
}

//Player head image functie
var i = 1;
var images= "../IMAGES/PlayerHeads/Player" + i + ".png";
var lenght = 21;
var time = 1000;

function changeImg(){
  if(document.getElementById("rotatingImage").src != null || document.getElementById("rotatingImage").src != "undefined"){
  document.getElementById("rotatingImage").src = images;
  images= "../IMAGES/PlayerHeads/Player" + i + ".png";
  if(i < lenght){
  i++;
  }else{
    i = 1;
  }


  setTimeout("changeImg()", time);}
}
window.onload = changeImg;
