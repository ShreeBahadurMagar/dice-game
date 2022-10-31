var randomNumber1 = Math.floor(Math.random() * 6 + 1); // gives the random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //here dicing the image from dice1- to dice6 and applying the concatination
var randomImageSource = "images/" + randomDiceImage; //creating the random image from the images sources
var image1 = document.querySelectorAll("img")[0];//taking images from the source and its index and using DOM 
image1.setAttribute("src", randomImageSource) //setting the attributes of images src is source and randomImageSource is taken from the above variables. 



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "/images/dice" + randomNumber2 + ".png"; //short way to merge from above
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //short way of merging the two codes in a single code.


//applying the h1 tag and comparing the dice to each others like player 1 an 2 using conditional statements. 

if  (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
  document.querySelector("h1").innerHTML = "It's Draw MAN"
}