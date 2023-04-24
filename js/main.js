


// d ,// const newarray=[1,3,2,5,10]
// const isprime =num =>{
//     for (let i=2;i<num;i++){
//         if (num%i===0)return false;

//     }
//     return num !==1;
// }
// const myprimearray= newarray.filter(Element=> isprime(Element));
// console.log(myprimearray);


// e,// const getallpalindromes =(words) =>words.filter((word)=>word.split("").reverse().join("")=== word);
    
// console.log(getallpalindromes(["nani","noon"]));


//  c,// add = function(arr) {
//     return arr.reduce((a, b) => a + b, 0);
// };
 
// var arr = [1,2,3,4,5,6,7,8,9];
 
// var sum = add(arr);
// console.log(sum)


//  a,// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// let odds = arr.filter(n => n%2)

// console.log(odds)



//  function(array){
//                   for(var i = 0 ; i< array.length ; i++){
//                         if(array[i]%2!=0){
//                            console.log(array[i])
//                         } 
//                    }
//                 }
//       (function(array){
//              for(var i = 0 ; i< array.length ; i++){
//                         if(array[i]%2!=0){
//                            console.log(array[i])
//                         } 
//                    }
//              })([1,2,3,4])




//  function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   }
// (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   })("MUDRA IS MY NAME");





// function(array){
//     var sum = 0;
//     for(var i = 0 ; i< array.length ; i++){
//        sum = sum + array[i];
//      }
//      return sum;
//   }
//   console.log(array)
// (function(array){
// var sum = 0;
//     for(var i = 0 ; i< array.length ; i++){
//        sum = sum + array[i];
//      }
//      return sum;
// })
 





//                  function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   }



//                    (  
//                    function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   })([1,2,3,4])




function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
 (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })