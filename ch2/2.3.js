// Title:   Everything has a limit!
// Detail:  As an extension of once(), could you write a higher-order function
// thisManyTimes(fn,n) that would let you call the fn() function up to n times,
// but would afterwards do nothing? To give an example, once(fn) and
// thisManyTimes(fn,1) would produce functions that behave in exactly the same
// way.

function thisManyTimes(fn, n) {
  let done = 0;
  return((...args) => {
    if (done < n) {
      done += 1;
      fn(...args);
    }
  });
}

function billMe(item, price) {
  console.log(item + ": " + price);
}

// TEST
let tripleBill = thisManyTimes(billMe, 3);
tripleBill("Shoes", "$40");
tripleBill("Shirt", "$20");
tripleBill("Backpack", "$60");
tripleBill("Toilet Paper", "$100");
