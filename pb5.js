//5
let sum = 0;
 const number = prompt("Choose a number:  ");
 const numberOfDigits = number.toString().length;

 let temp = number;
 while (temp>0){
   const last = temp % 10;
   sum +=  last ** numberOfDigits;
   temp = parseInt(temp / 10);  
 }

 if(sum == number)
{
  console.log("True");
}
else {
  console.log("False")
}