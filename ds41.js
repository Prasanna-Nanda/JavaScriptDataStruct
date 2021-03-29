var val = Math.floor(100 + Math.random() * 900);
console.log("Ramdom Three digit number :" +val);

  console.log("============================================");

//Store random number into array

   
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 445, 212, 365, 2543];
console.log("Random number into array : " +random_item(items));

console.log("============================================");


   //Then find the 2nd largest and the 2nd smallest element without sorting the array

   function Second_Smallest_Largest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log("Smallest and largest number :" +Second_Smallest_Largest([254, 445, 212, 365, 2543]));

console.log("============================================");


var items = [254, 445, 212, 365, 2543]; 
var sorted = items.sort(); 
console.log("sort string is : " + sorted ); 

console.log("============================================");

const num = 100;
const isPrime = (n) => {
   for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
         return false;
      }
   };
   return true;
};
const findPrimeFactors = num => {
   const res = num % 2 === 0 ? [2] : [];
   let start = 3;
   while(start <= num){
      if(num % start === 0){
         if(isPrime(start)){
            res.push(start);
         };
      };
      start++;
   };
   return res;
};
console.log("PrimeFactors: " +findPrimeFactors(100));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
}

  console.log("============================================");

/*
  for (i of Array(100).keys()) {
  i*10+10;
  }*/
  for (i of Array(100).keys()) {
      i+10
      
    }
  console.log("range : "+i);


  