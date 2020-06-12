// Title:   No extra variables
// Detail:  Our functional implementation required using an extra variable,
// done, to mark whether the function had already been called. Not that it
// matters... but could you make do without using any extra variables? Note
// that we aren't telling you not to use any variables; it's just a matter of
// not adding any new ones, such as done, and only as an exercise!

function once(fn, one) {
  return ((...args) => {
    if (!one) {
      one = true;
      fn(...args);
    }
  });
}

function billMe(item, price) {
  console.log(item + ": " + price);
}

// TEST
const billMeOnce = once(billMe, false);
billMeOnce("shoes", "$40");
billMeOnce("shoes", "$40");
billMeOnce("shoes", "$40");
