let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1

console.log("Third element in the array:");
console.log(array1[2]);

// print the last element in array1

console.log("Last element in the array:");
console.log(array1[array1.length - 1]);

// add 16 and 3 to array1

array1.push(16, 3);

// sort the array, then print the 3rd element again

array1.sort();
console.log("Third element in the array after sorting:");
console.log(array1[2]);

// did it change?
// Yes, it printed 14

// create a variable called myTodoList that holds an empty array

let myTodoList = [];

// add three todo items to the array using a built-in array method

myTodoList.push("Get milk", "Finish homework", "Brush teeth");

// remove the second item in the array

myTodoList.splice(1, 1);

// create another array, yourTodoList, and add two todo items

let yourTodoList = ["Paint the house", "Go fishing", "Pull weeds"];

// create another array, ourTodoList

let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList

ourTodoList = myTodoList.concat(yourTodoList);

// sort the following array from Z-A

ourTodoList.sort();

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(p) {
  if (typeof p === "boolean") {
    return !p;
  }
  if (typeof p === "string" || typeof p === "number") {
    if (typeof p === "number") p = p.toString();
    p = p.split("");
    p = p.reverse();
    p = p.join("");
    return p;
  }
  if (typeof p === "object") {
    p = p.reverse();
    return p;
  }
}

console.log("Reverse Function Answer:");
console.log(reverse(1234));

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed

function addingMachine() {
  // console.log(arguments.length);
  let sumTotal = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumTotal += arguments[i];
  }
  console.log("The sum total of all arguments is:");
  console.log(sumTotal);
}

// console.log(addingMachine(1, 2, 3, 4));
// console.log(addingMachine(1, 2, 3, 4, 5, 6, 7));
addingMachine(1, 2, 3, 4, 5, 6, 7, 7, 9, 4, 2344, 112, 34343, 234);

// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function personalProfits(grossInvoiced, profitMargin) {
  let profits = grossInvoiced * profitMargin;
  let remainingAmount = profits;
  let myBonus = 0;
  if (profits > 100000) {
    myBonus += 10000;
    remainingAmount = profits - 100000;
    if (remainingAmount > 400000) {
      myBonus += 80000;
      remainingAmount = profits - 500000;
      if (remainingAmount > 500000) {
        myBonus += 175000;
        remainingAmount = profits - 1000000;
        return myBonus + remainingAmount * 0.4;
      } else {
        return myBonus + remainingAmount * 0.35;
      }
    } else {
      return myBonus + remainingAmount * 0.2;
    }
  } else {
    return profits * 0.1;
  }
}

console.log("My bonus will be: ");
// console.log(personalProfits(10000, 0.563));
// console.log(personalProfits(250000, 0.356));
// console.log(personalProfits(750000, 0.235));
console.log(personalProfits(35000000, 0.487));

// Instructor's solution below

function myBonus(grossInvoiced, profitMargin) {
  let profits = grossInvoiced * profitMargin;

  let bonus = 0;

  let tier1Cieling = 100000;
  let tier2Cieling = 400000;
  let tier3Cieling = 500000;

  let tier1Rate = 0.1;
  let tier2Rate = 0.2;
  let tier3Rate = 0.35;
  let tier4Rate = 0.4;

  let maxBonusTier1 = tier1Cieling * tier1Rate;
  let maxBonusTier2 = tier2Cieling * tier2Rate + maxBonusTier1;
  let maxBonusTier3 = tier3Cieling * tier3Rate + maxBonusTier2;

  if (profits <= tier1Cieling) {
    bonus = profits * 0.1;
  } else if (profits <= tier2Cieling + tier1Cieling) {
    bonus = maxBonusTier1 + (profits - tier1Cieling) * tier2Rate;
  } else if (profits <= tier3Cieling + tier2Cieling + tier1Cieling) {
    bonus = maxBonusTier2 + (profits - tier1Cieling - tier2Cieling) * tier3Rate;
  } else if (profits > 1000000) {
    bonus =
      maxBonusTier3 +
      (profits - tier1Cieling - tier2Cieling - tier3Cieling) * tier4Rate;
  } else {
    return "Error";
  }

  return bonus;
}

// console.log(myBonus(10000, .563))
// console.log(myBonus(250000, .356))
// console.log(myBonus(750000, .235))
// console.log(myBonus(35000000, .487))
