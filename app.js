//1
//We fork so that everyone has permission to edit. We also fork that it shows up on our own reposity.

// Easy Going
// Write a for loop that will log the numbers 1 through 20.

// for(let i = 1; i<=20; i++){
//     console.log(i)
// }

//## Get Even
//1. Write a `for` loop that will log only the even numbers in 0 through 200.
//>Hint: Think about the increment expression.

// for(let i = 0; i <=200; i+=2){
//     console.log(i)
// }

//## Excited Kitten
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// let i = 0

// while(i<=20){
//     console.log("Love me, pet me! HSSSSSS!")
//     i++;
// }


//2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

for(let i = 0; i <= 20; i++){
  if(i % 2 === 0) {
    r = Math.floor(Math.random() * 3);
    evenArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
    console.log(evenArray[r])
} else {
  console.log("Love me, pet me! HSSSSSS!")
}
}
    

// ## Fizz Buzz 

// >NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

// Write a javascript application that logs all numbers from 1 - 100 **AND**: 

//   1. If a number is divisible by 3 log "Fizz" instead of the number.
  
//   1. If a number is divisible by 5 log "Buzz" instead of the number.
  
//   1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

// const riteOfPassage = function(){
//   for(let i = 1; i <=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log("FizzBuzz")
//     } else if(i % 3 === 0){
//       console.log("Fizz")
//     } else if( i % 5 === 0){
//       console.log("Buzz")
//     } else {
//       console.log([i])
//     }
//   }
// }

// riteOfPassage();
// git commit -m "commit-4 Fizz Buzz Answered"

// ## Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
// ```javascript
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
// ```
// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".

kenny[0]="Gameboy"
//console.log(kenny)

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

jimClark[1] = jimClark[1] + 1;
//console.log(jimClark);

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = "Gotham City"
//console.log(ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop();
reuben.push("Chicago")
//console.log(reuben)

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

jimHaff.pop()
jimHaff.push("Boston","NewYork","DC");
//console.log(jimHaff);



// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)

// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// 2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for(let i = 0; i<ninjaTurtles.length; i++){
//   console.log(ninjaTurtles[i].toUpperCase())
// }

// ## Return of the Closets

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// javascript
const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];

//Thom's closet is more complicated. Check out this nested data structure!!
 const thomsCloset = [
   [
      //These are Thom's shirts
      "grey button-up",
     "dark grey button-up",
      "light blue button-up",
     "blue button-up",
   ],[
     //These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
      //Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];

// ### Alien Attire
// 1. Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

// let kristynsShoe = kristynsCloset.slice(0,1);
// herShoeString = kristynsShoe.toString();
// thomsCloset[2].push(herShoeString);
//console.log(thomsCloset[2])


// ### Dress 'em Up
// 1. Let's create some outfits for both Kristyn and Thom. Select 3 elements from `kristynsCloset` and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using `thomsCloset`. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)

// console.log(`kristyn is wearing ${kristynsCloset[1]} , a ${kristynsCloset[2]} , and a ${kristynsCloset[3]}`)

// console.log(`Thom is wearing ${thomsCloset[0][0]}, a ${thomsCloset[1][1]}, and a ${thomsCloset[2][2]}`)

// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

// for(i = 0; i < kristynsCloset.length; i++){
//   console.log(`WHIRR: Now Washing ${kristynsCloset[i]}`)
// }

// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

// for(i = 0; i < thomsCloset.length; i++){
//   console.log(thomsCloset[i])
// }

// ## Multiples of 3 and 5

// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// let multiples = []

// for(let i = 0; i <= 1000; i++){
//   if(i % 3 === 0 || i % 5 === 0){
//     multiples.push(i)
//   }
// } 

// sum = 0

// for(let i = 0; i<multiples.length; i++){
//    sum += multiples[i];
// }

// console.log(sum);

// Find the **sum** of all the multiples of 3 or 5 below 1000.

// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

// >Tip: Get used to thinking about how to solve problems _now_. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems
