// Creating a useState hook with closures
// Defining the use State closure
function useState(initialValue) {
  let _value = initialValue;

  return [
    function getValue(){ return _value},
    function setState(newValue) {_value = newValue},
  ]
}

// using the closure
const [ score, setScore ] = useState(0);
console.log(score());

// // setting a new value
setScore(100);
console.log(score());

// reference: https://www.freecodecamp.org/news/scope-and-closures-in-javascript/
