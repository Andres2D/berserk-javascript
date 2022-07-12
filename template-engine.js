/*
*
* Template engine, add a render(obj) method to the String Object
*
*/

// const template = `Hello, my name is ${firstName}, age ${age}, I am a ${job.name}`;
const employee = {
  firstName: 'Andres',
  age: 25,
  job: {
    name: 'Software developer'
  }
};

// const renderEngine = template.render(employee);
// console.log(renderEngine); // expected output:  Hello, my name is Andres, age 25, I am a Software developer

/**
 * Regular expression approach
 */
String.prototype.renderRegularExpression = function(obj) {
  const template = this;
  const regex = /\$\{([^${}]+)\}/g // --> regular expression to localize the vars between strings interpolation ${-}
  const getVarValue = (variable) => {
    variable = variable.split('.');
    let varValue = obj;
    while(variable.length) {
      varValue = varValue[variable.shift()];
    }
    return varValue;
  }
  const renderString = template.replace(regex, ($0, variable) => {
    return getVarValue(variable);
  });
  return renderString;
}

const template = 'Hello, my name is ${firstName}, age ${age}, I am a ${job.name}';
console.log(`Regular expression => ${template.renderRegularExpression(employee)}`);
