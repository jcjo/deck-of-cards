$(document).ready(function(){
  var suits = ["clubs", "hearts", "diamonds", "spades"]
  var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
  var deck = []
  numbers.forEach(function(number){
    suits.forEach(function(suit){
      deck.push(number +" of "+ suit);
    });
  });
  console.log(deck);

  deck.forEach(function(card) {
    $("ul#deck").append("<li>" + card + "</li>")
  });
});
