// Proxies are middleware for Javascript objects

// Proxy creation
const initialObj = {
  id: 10,
  description: 'This is a simple object'
};

const handler = {
  get: function(obj, prop) {
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