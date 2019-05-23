/**
 * Example: 4! = 4 x 3 x 2 x 1 = 24
 */

 function factorial(number) {
     let product = 1

     for (i = number; i >= 1; --i) {
         product = product * i
     }

     return product;
 }

 console.log(factorial(4))
 console.log(factorial(10))