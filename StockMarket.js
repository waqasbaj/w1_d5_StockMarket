

function maxProfit(arr)
{

  var min = arr[0];

  for(x = 0; x < arr.length - 1; x++)
  {
    if (min > arr[x + 1])
    {
      min = arr[x + 1];
    }
  }

  var max = arr[0];

  for(x = 0; x < arr.length - 1; x++)
  {
    if (max < arr[x + 1])
    {
      max = arr[x + 1];
    }

  }

  var profit = max -min;

  if (profit > 0)
  {
    return profit;
  }
  else
  {
    return -1;
  }

}

function maxStockMarket(input)

{

var minOut= input[0];

var minDay=0;

var maxOut=input[input.length-1];

var maxDay=input.length-1;

  for(x=0; x<input.length; x++)
  {
    if(minOut > input[x])
    {
      minOut = input[x];

      minDay = x;
    }
  }



  for(i=input.length-1; i>minDay; i--)
  {
    if(maxOut < input[i])
    {
      maxOut = input[i];

      maxDay = i;
    }

  }

  var profit = maxOut- minOut;

  console.log(profit, minDay, maxDay, maxOut, minOut);

  input.length = minDay+1;

  var newminOut= input[0];

  var newminDay=0;

  var newmaxOut=input[input.length-1];

  var newmaxDay=input.length-1;






  for(a=input.length-1; a>0; a--)
  {
    if(newmaxOut < input[a])
    {
      newmaxOut = input[a];

      newmaxDay = a;
    }
  }



  for(b=newmaxDay; b>0; b--)
  {
    if(newminOut > input[b])
    {
      newminOut = input[b];

      newminDay = b;
    }

  }

  var newmaxProfit = newmaxOut - newminOut;



  console.log(newmaxProfit, newminDay, newmaxDay, newmaxOut, newminOut);

  if(newmaxProfit > profit)

  {

    console.log("max profit is :", newmaxProfit, "Date to buy is: ", (newminDay+1), "Date to sell is: ", (newmaxDay+1));
  }

  else
  {
    console.log("max profit is :", profit, "Date to buy is: ", (minDay+1), "Date to sell is: ", (maxDay+1));

  }



}



maxStockMarket([45, 24, 35, 31, 40, 38, 11, 2 , 5, 100]);
