// Proxies are middleware for Javascript objects

// Proxy creation
const initialObj = {
  id: 10,
  description: 'This is a simple object'
};

const handler = {
  get: function(obj, prop) { // ==> a custom operation it's called a trap
    console.log('This is a get operation');
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log('This is a set operation');
    return obj[prop] = value;
  }
}

const customObjectProxy = new Proxy(initialObj, handler);
console.log(customObjectProxy.description);
console.log('---------');
customObjectProxy.id = 11;
console.log(customObjectProxy);
console.log('=========================');
// Real world implementation
// We want to make private the property status of the object
// if someone tries to get that value, we throw an error

const userObj = {
  id: 11,
  userName: 'Andres2D',
  status: 'loggedIn'
};

const userObjHandler = {
  get: function(obj, prop) {
    if(prop === 'status'){
      throw new Error('401 Unauthorized to get access to this value');
    }else{
      return obj[prop];
    }
  }
}

const userObjProxy = new Proxy(userObj, userObjHandler);
console.log(userObjProxy.id);

// If we want to validate a set value before to update the object:

const userObjTwo = {
  id: 11,
  userName: 'Andres2D',
  status: 'loggedIn'
};

const userObjHandlerTwo = {
  set: function(obj, prop, value) {
    if(typeof value !== 'string'){
      throw new Error('This value should be a string');
    }else{
      return obj[prop] = value;
    }
  }
}

const userObjProxyTwo = new Proxy(userObjTwo, userObjHandlerTwo);
userObjProxyTwo.userName = 'Andres_2D';
console.log(userObjProxyTwo);
userObjProxyTwo.userName = 3;
