
/**
 * 1] Don't compress your code:
 */

// Please don't
// This is the object to store a office reservation state
let ofcSts = { ena: true, resBy: '' };

// This function is used to reserve the office sending an user
const resOfc = (u) => { if(ofcSts.ena) { ofcSts = { ena: false, resBy: u } } else { return; } };

resOfc('Mike');
console.log(ofcSts);

// Instead
let officeStatus = { 
  enabled: true, 
  reservedByUser: '' 
};

const reserveOffice = (user) => { 
  if(officeStatus.enabled) { 
    officeStatus = { 
      enabled: false, 
      reservedByUser: user 
    } 
  } else {
    return;
  }
};

reserveOffice('Mike');
console.log(officeStatus);

/**
 * 2] Simplify return cases
 */


/**
 * 3] Don't repeat yourself, if clauses 
 */


/**
 * 4] Use more destructuring
 */

/**
 * 5] An alternative to the switch case clauses 
 */