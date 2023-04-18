/**In this algorithm, we use a string and an array of vowels to create a whale talk. The outer loop iterates
 *the strings while the inner loop iterates the array of vowels. Each time the loop is initiated, 
 *every member of the inner loop will be compare to each member of the outer loop, if the condition is met, 
 then the string will be pushed onto a new array called "resultArray". After gathering all the vowels, 
 we continue the process in order to double the "u's" and the "e's" for us to archieve the desired result. 
 if the input string, which is now an array, is equal to "e", then double all the e's and if the input[i] 
 is equal to the u then double all the u's.*/
let input="We will be going to school thursday!".toLowerCase();
const vowels=["a", "e", "i", "o", "u"];
let resultArray=[];
for(let i=0; i<input.length; i++){
  let j=0;
for(; j<vowels.length; j++){
      if(input[i]==vowels[j]){
        resultArray.push(input[i])
        }};
      if(input[i]=="e"){
      resultArray.push(input[i]);
      }
      if(input[i]=="u"){
        resultArray.push(input[i])
      }
      }
console.log(resultArray.join("").toUpperCase());