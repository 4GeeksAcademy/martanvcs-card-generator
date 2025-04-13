import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

 const suits = ["heart", "spade", "club", "diamond"];
  const symbols = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suitIndex = Math.floor(Math.random() * 4);
  const valueIndex = Math.floor(Math.random() * 13);

  const suit = suits[suitIndex];
  const value = values[valueIndex];
  const symbol = symbols[suit];

  const card = document.getElementById("card");

  card.classList.add("animate");

  setTimeout(() => {
    card.className = "card " + suit;
    card.querySelector(".top").innerHTML = `${value} ${symbol}`;
    card.querySelector(".middle").innerHTML = `${symbol}`;
    card.querySelector(".bottom").innerHTML = `${value} ${symbol}`;

    
    card.classList.remove("animate");
  }, 300); 
}


