// Title:   Classes as first-class objects
// Detail:  We saw that functions are first class objects, but did you know
// classes also are? (Though, of course, speaking of classes as objects does
// sound weird...) Study this example and see what makes it tick! Be careful:
// there's some purposefully weird code in it:

// Anonymous function that returns a class
const makeSaluteClass = (term) =>
  class {
    constructor(x) {
      this.x = x;
    }

    salute(y) {
      console.log(`${this.x} says "${term}" to ${y}`);
    }
  };

// Calls function to instantiate "Spanish" class
// Then instantiates class and calls "salute"
const Spanish = makeSaluteClass("HOLA");
new Spanish("ALFA").salute("BETA");
// OUT: ALFA says "HOLA" to BETA

// Calls function and immediately instantiates class and calls "salute"
new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA");
// GAMMA says "HELLO" to DELTA

// New function fullSalute takes all parameters (class, term, y)
const fullSalute = (c, x, y) => new c(x).salute(y);
const French = makeSaluteClass("BON JOUR");
fullSalute(French, "EPSILON", "ZETA");
// EPSILON says "BON JOUR" to ZETA
