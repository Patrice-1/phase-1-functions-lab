// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block < 42) {
    return (42 -block);
  } 
  else {
    return (block - 42);
  }
}

function distanceFromHqInFeet(block) {
    if (block < 42) {
      return ((42 - block)*264);
    } else {
      return ((block - 42)*264);
    }
}
    function distanceTravelledInFeet(block1, block2) {
      
        if (block1 <block2)
        {
          return (block2 - block1)*264;
        }
         else 
         {
           return (block1 - block2)*264;
         }
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start, destination);
  
  if ((distance) <= 400)
     {
    return 0;
  } 

  else if (distance > 400 && distance <=2000)
  {
    
    return (distance-400)*0.02;
  }

  else if (distance > 2000 && distance <= 2500)
  {
    return 25;

  }
  else if (distance > 2500)
     {
    return `cannot travel that far`;
  }
}
