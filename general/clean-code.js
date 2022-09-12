
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

/**
 * 5] An alternative to the switch case clauses 
 */