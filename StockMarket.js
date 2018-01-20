

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
  var array = maxInArray(input);

  var inDay = array[1];

  var inPrice = array[2];

  var outDay = array[3];

  var outPrice = array[4];

  var maxOutProfit = array[5];


  while(array[0].length>0)
  {
    output = maxInArray(array[0]);

    if(maxOutProfit< output[5])
    {

        inDay = output[1];

        inPrice = output[2];

        outDay = output[3];

        outPrice = output[4];

        maxOutProfit = output[5];

    }

    array = output;

  }
console.log("max profit is :", maxOutProfit, "Date to buy is: ", inDay, "Date to sell is: ", outDay );

}


function maxInArray(input){

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

  var output =[];

  input.length = minDay;

  var maxProfit = maxOut - minOut;

  output.push(input, minDay+1, minOut, maxDay+1, maxOut, maxProfit);

  return output;
}



maxStockMarket([45, 24, 0, 31, 40, 38, 11, 2 , 5, 100, 0 , 10, 20 , 30, 40, 50 , 60 ,70, 80, 900, 100]);
