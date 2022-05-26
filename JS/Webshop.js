var countDownDate = new Date("Jun 15, 2022, 23:59:59").getTime();

var prijs= 0.0;
var aantalProducten = 0;
var producten = [];

var prijs1= 11.25;
var artikel1= " Pig Mok";

var prijs2= 31.50;
var artikel2= " Bee Lamp"

var prijs3= 11.25;
var artikel3= " Steve Plush"

var prijs4= 11.25;
var artikel4= " Wolf Plush"

var prijs5= 11.25;
var artikel5= "Creeper Plush"

var prijs6= 29.95;
var artikel6= "Torch"

var prijsnummers = [prijs1, prijs2, prijs3, prijs4, prijs5, prijs6];
var productennaam = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
//Prijs toevoegen aan de Webshop

function Prijs(prijsnummer, artikel){
  prijs = prijs + prijsnummer;
  aantalProducten = aantalProducten + 1;

  producten.push(artikel);

  var productenPrint = [];

  for(var i = 0; i < 6; i++){

    var aantal = teller(productennaam[i]);
if(aantal != 0){
    productenPrint.push("</p> <p> " + aantal + "x " + productennaam[i] + "     prijs: " + aantal*prijsnummers[i] + "€");
  }
  }

  document.getElementById("prijs").innerHTML = "Prijs: " + prijs + "€";
  document.getElementById("aantalProducten").innerHTML = "aantal Producten: " + aantalProducten;
  document.getElementById("gekochteProducten").innerHTML= "<p>" + productenPrint + "</p>";

}

function onClick(id){
  if(id == 1){
  Prijs(prijs1, artikel1);}
  if(id == 2){
  Prijs(prijs2, artikel2);}
  if(id == 3){
  Prijs(prijs3, artikel3);}
  if(id == 4){
  Prijs(prijs4, artikel4);}
  if(id == 5){
  Prijs(prijs5, artikel5);}
  if(id == 6){
  Prijs(prijs6, artikel6);}
}
function teller(waarde){
    var n = 0;
    for(i = 0; i < aantalProducten; i++){

        console.log(waarde.localeCompare(producten[i]));

        if(producten[i].localeCompare(waarde) == 0){  n++;}

    }
    return n;
}

var countDown = setInterval(function(){

  var now = new Date().getTime();

  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  if(document.getElementById("timer") != null){
  document.getElementById("timer").innerHTML = days + " dagen " + hours + " uur " + minutes + " minuten " + seconds + " seconden";}

}, 1000)
//ff niet
//ff wellicht
//dit is een test voor firebase die het niet fijn aan het doen is en dat ik dan een bestand aan moet passen zodat ik toch wel aanpast
