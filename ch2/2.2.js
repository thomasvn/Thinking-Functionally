// Title:   Alternating functions
// Detail:  In the spirit of our onceAndAfter() function, could you write an
// alternator() higher-order function that gets two functions as arguments, and
// on each call, alternatively calls one and another? The expected behavior
// should be as in the following example:
// let sayA = () => console.log("A");
// let sayB = () => console.log("B");

// let alt = alternator(sayA, sayB);
// alt(); // A
// alt(); // B
// alt(); // A
// alt(); // B
// alt(); // A
// alt(); // B

function alternator(f, g) {
  let isF = true;
  return((...arg) => {
    if (isF) {
      f(...arg);
      isF = false;
    } else {
      g(...arg);
      isF = true;
    }
  });
}

let sayA = () => { console.log('A'); }
let sayB = () => { console.log('B'); }

let alt = alternator(sayA, sayB);
alt();
alt();
alt();
alt();
