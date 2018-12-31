
const JASON_CONTACT = {
  name: 'Jason Wolfe',
  phone: '(310) 562 - 0755',
  address: '562 Military Way, Palo Alto, CA',
  email: 'JasonWolfe@gmail.com',
};

const PATRICK_CONTACT = {
  name: 'Patrick Zimmerman',
  phone: '(202) 557 9545',
  address: '562 Military Way, Palo Alto, CA',
  email: 'p_zimmerman_1@hotmail.com',
}

const getContactInfo = (name = 'Jason') => {
  if(name === 'Patrick'){
    return PATRICK_CONTACT ;
  } else {
    return JASON_CONTACT;
  }
}

export default getContactInfo;
