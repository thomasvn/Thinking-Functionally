// Title:   Factorial errors
// Detail:  Factorials, as we defined them, should only be calculated for
// non-negative integers. However, the function we wrote doesn't verify if its
// argument is valid or not. Can you add the necessary checks? Try to avoid
// repeated, redundant tests!

function fact(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(5)); // 120
console.log(fact(-3));
