const JASON_CONTACT = {
  name   : 'Jason Wolfe',
  phone  : '(310) 562 - 0755',
  address: '562 Military Way, Palo Alto, CA',
  email  : 'JasonWolfe@gmail.com',
};

const PATRICK_CONTACT = {
  name   : 'Patrick Zimmerman',
  phone  : '(202) 557 9545',
  address: '562 Military Way, Palo Alto, CA',
  email  : 'p_zimmerman_1@hotmail.com',
};

const CURTIS_CONTACT = {
  name   : 'Curtis Molainey',
  phone  : '(222) 117 5545',
  address: '562 Military Way, Palo Alto, CA',
  email  : 'curtisMolainey@gmail.com',
};

const CONTACT_MAP = {
  jason  : JASON_CONTACT,
  patrick: PATRICK_CONTACT,
  curtis : CURTIS_CONTACT,
};

const getContactInfo = (name = 'Jason') => {
  return CONTACT_MAP[name.toLowerCase()] || JASON_CONTACT;
};

export default getContactInfo;
