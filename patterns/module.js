// ESM, already implements the Module Pattern to encapsulate the
// variables and methods: This is a template of the module patter:

// This could be an state object
let myPrivateVar = 'Bored';

// A method to expose the private object
const myCurrentStatus = (status) => {
  console.log(status);
};

const myNamespace = {
  // Mi public var
  myPublicVar: 'Sad',

  // A public function with access to the private var
  myPublicFunction(status) {
    // Setting the private var
    myPrivateVar = status;

    // Calling a private method
    myCurrentStatus(status);
  }
};

// Exposing a module in which we are using closures to encapsulate our data
export default myNamespace;
