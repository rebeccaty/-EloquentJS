for (var i = "#"; i.length < 8; i += "#")
  console.log(i);

for (var num = 1; num<= 100; num++) {
  if (num % 3 === 0 && num % 5===0) {
    console.log("FizzBuzz");
    I don't know what I'm doing
  }
  else if (num % 3 === 0) {
    console.log("Fizz");
    }
  else if (num % 5 === 0) {
    console.log("Buzz");
  }
  else console.log(num);
}

var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
    }
    board += "\n";
  }
console.log(board);


function min(a,b) {
  if (a<b)
    return a;
  else
    return b;
}
console.log(min(0,  10));
console.log(min(0,  -10));

function isEven(n) {
  if (n==0)
    return true;
  else if (n==1)
    return false;
  else if (n<0)
    return isEven(-n);
  else
    return isEven(n-2);
}
console.log(isEven(3));

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(78));


function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);


var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

var day1 = {
    squirrel: false,
    events: ["work","touched tree","pizza","running","television"]
}

console.log(day1.squirrel);
console.log(day1.events[2]);

var anObject = {left:1, right:2};
delete anObject.left;
console.log(anObject);
console.log(typeof [1,2]);


var journal =[];
function addEntry(events,didITurnIntoSquirrel){
  journal.push({
    events:events,
    squirrel:didITurnIntoSquirrel
  });
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
      }

console.log(phi([76, 9, 4, 1]));
function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("work", journal));

function range(start, end, step) {
  var array = [];
  if (step == null) step = 1;
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
console.log((range(1, 10, 2)));
console.log((range(5, 2, -1)));

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

console.log(reverseArray(["R", "B", "C"]));

function reverseArrayInPlace(array) {
  for (var i = 0; i<Math.floor(array.length / 2); i++) {
    array[i] = array[array.length-1-i];
    array[array.length - 1 -i] = array[i];
  }
return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));

function arrayToList(array) {
  var list =null ;

  }
