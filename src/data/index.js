import JASON from './jason';
import PATRICK from './patrick';


const CURTIS_CONTACT = {
  name   : 'Curtis Molainey',
  phone  : '(222) 117 5545',
  address: '562 Military Way, Palo Alto, CA',
  email  : 'curtisMolainey@gmail.com',
};

const DATA_MAP = {
  jason  : JASON,
  patrick: PATRICK,
  curtis : CURTIS_CONTACT,
};

const getData = (name = 'Jason') => {
  return DATA_MAP[name.toLowerCase()] || JASON;
};

export default getData;
