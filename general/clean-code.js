
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

// Do instead
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

// Please don't
const findBookBad = (bookId) => {
  if(bookId !== undefined || bookId !== null) {
    const book = {
      id: bookId,
      name: 'Book title'
    };
    return book;
  } else {
    return null;
  }
};

// Do instead
const findBook = (bookId) => {
  if(!book) {
    return null;
  }

  const book = {
    id: bookId,
    name: 'Book title'
  };
  return book;
};


/**
 * 3] Don't repeat yourself, if clauses 
 */

// Please don't

const invitationList = ['Kevin', 'Sara', 'Steve', 'Karen'];
const capacity = 10;

const getPartyAccessBad = (person) => {
  if(invitationList.length < capacity && invitationList.includes(person.name)) {
    return 'Access granted';
  }

  if(invitationList.length < capacity && person.hasMoney()) {
    return 'Access granted';
  }

  return 'Access denied';
};

const verificationBad = getPartyAccessBad({ name: 'Andres', hasMoney: () => { return false } });
console.log(verificationBad);

// Do instead

const getPartyAccess = (person) => {
  if(invitationList.length < capacity) {
    if(invitationList.includes(person.name) || person.hasMoney()) {
      return 'Access granted';
    }
  }

  return 'Access denied';
};

const verification = getPartyAccess({ name: 'Andres', hasMoney: () => { return false } });
console.log(verification);

/**
 * 4] Use more destructuring
 */

// Please don't
const client = {
  name: 'Andres',
  budget: 1000,
  references: ['Nicolas', 'Ellen']
}

const verifyCreditBad = (client) => {
  if(client.budget > 500 && client.references.length === 2) {
    return {
      name: client.name,
      approved: true,
      mainContact: client.references[0],
      optionalContact: client.references[1]
    }
  } else {
    return {
      approved: false
    }
  }
};

console.log(verifyCreditBad(client));

// Do instead
const verifyCredit = (client) => {

  const { budget, references, name } = client;
  const [ mainReference, optionalReference ] = references;

  if(budget > 500 && references.length === 2) {
    return {
      name,
      approved: true,
      mainContact: mainReference,
      optionalContact: optionalReference
    }
  } else {
    return {
      approved: false
    }
  }
};

console.log(verifyCredit(client));

/**
 * 5] An alternative to the switch case clauses 
 */

// One option
const executeAction = (action) => {
  switch(action) {
    case 'create':
      return {
        created: true,
        message: 'Item created successfully'
      };
    case 'delete': {
      return {
        deleted: true,
        message: 'Item deleted successfully'
      }
    }
    case 'update': {
      return {
        updated: true,
        message: 'Item updated successfully'
      }
    }
    default: {
      return {
        error: true,
        message: 'Invalid action'
      };
    }
  }
};

console.log(executeAction('sd'));

// Second option

const actionMap = {
  create: () => {
    return {
      created: true,
      message: 'Item created successfully'
    }
  },
  delete: () => {
    return {
      deleted: true,
      message: 'Item deleted successfully'
    }
  },
  update: () => {
    return {
      updated: true,
      message: 'Item updated successfully'
    }
  }
}

const executeActionMap = (action) => {
  if(!Object.keys(actionMap).includes(action)) {
    return {
      error: true,
      message: 'Invalid action'
    };
  }

  return actionMap[action]();
}

console.log(executeActionMap('sa'));