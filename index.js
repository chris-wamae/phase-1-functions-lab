// Code your solution in this file!
function distanceFromHqInBlocks(block)
{if (block > 42)
    {return block - 42}
else if(block <42)
    {return 42 - block}
}

function distanceFromHqInFeet(blocks)
{if (blocks > 42)
    {return (blocks - 42) * 264}
else if(blocks <42)
    {return (42 - blocks) * 264}
}

function distanceTravelledInFeet(endBlock,startBlock)
{if(endBlock < startBlock)
   {return (startBlock - endBlock) * 264}
   else if(startBlock < endBlock)
   {return (endBlock - startBlock) * 264}
}


function calculatesFarePrice(start, destination)
{if
  (destination < start && 
  ((start - destination) * 264) <= 400)
    {return 0}
else if
   (start < destination &&
((destination - start) * 264)<= 400)
   {return 0}
else if
    (start < destination &&
    ((destination - start) * 264) > 400 && ((destination - start) * 264) < 2000)
    {return ((((destination - start) * 264) - 400) * 2) / 100 }

else if
    (destination < start &&
        ((start - destination) * 264) > 400 && ((start - destination) * 264) < 2000 )
        {return ((((start - destination) *264 )- 400) * 2) / 100 }

else if
    (start < destination &&
        ((destination - start) * 264) > 400 && ((destination - start) * 264) > 2000 && ((destination - start) * 264) < 2500)
        {return 25}
else if
    (destination < start &&
        ((start - destination) * 264) > 400 && ((start - destination) * 264) > 2000 && ((start - destination) * 264) < 2500)
    {return 25}

    else if
    (start < destination &&
        ((destination - start) * 264) > 2500)
        {return "cannot travel that far"}
    
        else if
    (destination < start &&
        ((start - destination) * 264) > 2500)
        {return "cannot travel that far"}
      
}

