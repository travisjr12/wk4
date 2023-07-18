//i created the variable ages and elements in the array
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
// i want the result of 93 - 3 so ages[ages.length -1] takes the last element 93 and substracts the first element which is ages[0]
let result = ages[ages.length - 1] -ages[0]
// result shoud be 90
console.log(result)

//i added a new element or age to the end of the array
ages.push(40)
// i want to check if the result since we added a new value to the end of the array
result = ages[ages.length - 1] -ages[0]
// result should be 37
console.log(result)
//add var sum to find average age of all ages
var sum = 0
//i create a for loop & itterate each element to count towards the sum 
for (var i = 0; i < ages.length; i++) {
  sum += ages[i];}
//create a variable to formulate the average number for ages
var average = sum / ages.length;
// console.log the average should be 30
console.log(average)
//
//
//created an array with string names as elements
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//created another variable for the total number of letters
let totalLetters = 0;
// created a for loop to itterate similar to ages but for strings count
for (let i = 0; i < names.length; i++) {
  //i want to add the length of each number of letters
  totalLetters += names[i].length;
}
//find the average of letters for names
const averageLetters = totalLetters / names.length;
//use Math.round to round up to a whole number
const roundedAverage = Math.round(averageLetters);
//roundedAverage should be 4
console.log(roundedAverage)
//created a space string variable
let concatenatedNames = '';
//itterate the lengths this time with a space
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}
//trim is to avoid extra spaces betweens names
console.log(concatenatedNames.trim())
//How do you access the last element of any array?
// we would create a array with numbers, for example var
// lastNumber = array[array.length - 1]; it always counts from 0 so the total length "array.length" minus 1 so it gives the index of the last element of the array then console.log(lastNumber)
//How do you access the first element of any array?
//i would create an array say numbered 1-5, create a variable for example var firstNumber = myNumbers[0]; the name of the array myNumbers calls the first element which always starts at 0, 1, 2, 3, 4, 5 console.log(firstNumber) should be one

//itterated over the names to give the number in letter value
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
//should be [3,5,3,5,4,3]
console.log(nameLengths);
//uses any word n number of times to concatenate  
function concatenateWord(word, n) {
  return word.repeat(n);
}
result = concatenateWord('Promineo', 4)
//should log Promineo 4 times 
console.log(result)
// created two perameters first and last name wanting to return full last name with a space in between
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
//this prints out Travis Romo in console
fullName = fullName('Travis', 'Romo');
console.log(fullName)
//reduce means its gets a single value from the array starting at 0, acc(accumulates) is the current value & curr(current) elements itterated that get the sum of theseNumbers
let theseNumbers =[50, 51]
function isSumGreaterThan100(theseNumbers) {
  const sum = theseNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum > 100;
}
//asks if theseNumbers are greater than 100 should return true
const isGreater = isSumGreaterThan100(theseNumbers);
console.log(isGreater);
//we accumulated the array of number and itterated the total sum which is 30 and divided the average numbers in the array which is 5 and log should be 6

let moreNumbers = [2, 4, 6, 8, 10]
function calculateAverage(moreNumbers) {
  if (moreNumbers.length == 0) {
    return 0;  
  } else {
    let sum = 0;
    for (let i = 0; i < moreNumbers.length; i++) {
      sum += moreNumbers[i];
    }
    return sum / moreNumbers.length;
  }
}
average = calculateAverage(moreNumbers);
console.log(average)

//created 2 arrays to calculate if sum in array1 is bigger
 let array1 = [11, 22, 33];
 let array2 = [4, 5, 6];
//like the previous code sum and num are added then divided by the average length
 function compareAverages(array1, array2) {
  average1 = array1.reduce((sum, num) => sum + num, 0) / array1.length;
  average2 = array2.reduce((sum, num) => sum + num, 0) / array2.length;
  //stating if the first array is greater than the 2nd then it is true
  if (average1 > average2) {
    return true;
  } else {
    return false;
  }
}
//log should be true
result = compareAverages(array1, array2);
console.log(result)
//shoes that if its hot and my money is more than 10.50 ill buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.50) {
    return true;
  }
  
  return false;
}
console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(true, 8.28));
console.log(willBuyDrink(false, 11.25));
//shows that if i go outside and is raining I'll use an umbrella but if sunny i will not need an umbrella
function whenIGoOutside(isRaining, isSunny) {
  if (isRaining) {
    return "I will use an umbrella";
  } else if (isSunny) {
    return "I don't need an umbrella";
  }
}

console.log(whenIGoOutside(true, false));
console.log(whenIGoOutside(false, true));