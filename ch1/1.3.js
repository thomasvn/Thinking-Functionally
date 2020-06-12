// Title:   Climbing factorial
// Detail:  Our implementation of factorial starts multiplying by n, then
// by n-1, then n-2, and so on., in what we could call a downward fashion. Can
// you write a new version of the factorial function, that will loop upwards?

function fact(n, counter=1) {
  if (counter === n) {
    return n;
  } else {
    return counter * fact(n, counter + 1);
  }
}

console.log(fact(5)); // 120
