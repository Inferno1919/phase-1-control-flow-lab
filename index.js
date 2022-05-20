


function scuberGreetingForFeet(rideLength){
  if (rideLength < 400 ) {
    return "This one is on me!";
  } 
  if (rideLength >= 400 && rideLength < 2000) {
    return "That will be twenty bucks.";
  }
  if (rideLength >= 2000 && rideLength <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  if (rideLength > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(currentCity){
  if(currentCity === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}



function switchOnCharmFromTip(tip){
  if(tip === "generous") {
    return "Thank you so much.";
  
  } else if(tip === "not as generous") {
      return "Thank you.";
      
      } else {
        return "Bye.";
        
}
}