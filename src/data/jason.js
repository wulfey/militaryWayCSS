const JASON = {
  name     : 'Jason Wolfe',
  phone    : '(310) 562 - 0755',
  address  : '562 Military Way, Palo Alto, CA',
  email    : 'JasonWolfe@gmail.com',
  summary  : 'Ambitious software engineer looking for more full stack work in an aggressive environment. After 6 years writing software patents, I taught myself to code on unemployment and have risen to be the second best developer at my current employer. Our CTO has recently left the company and I am striking out to find a workplace where I can keep rising.',
  jobs     : [
    {
      title      : 'Software Engineer',
      company    : 'Keyo',
      description: 'Full stack developer working on web and server sides of tenant and landlord facing web applications in the long term leasing space.',
      start      : '11-2017',
      end        : null,
      bullets    : [
        'Eliminated manual first step of marketing funnel by automating email responses to inquiries on rental listings based on regex operations applied to the inquires.',
        'Automated generation of complete lease application PDFs from mobile client submitted data, signatures, and documents for both rental applicants and their guarantors.',
        'Created a multi-page Redux Form generator that reduced developer time to generate a multi-page CRUD form for a rental data model (e.g., Listing, Building, Unit, Lease) from three weeks to several days.',
        'Created a Redux Form powered scheduling web app that eliminated manual entry of times for scheduling apartment viewings by customers.',
      ]
    },
    {
      title       : 'Independent Developer and Patent Practitioner',
      company     : 'Unemployment',
      description : 'Taught myself React, React-Native, ES6, C++, Java, JavaScript, and Ruby on Rails. Developer several solo projects including:',
      start       : '11-2016',
      end         : '11-2017',
      bullets: [
        'A tabletop gaming simulator in Ruby on Rails.',
        'A cryptocurrency monitoring web application using the MERN stack.',
        'A react template to house access all my smaller study projects.',
      ],
    },
    {
      title       : 'Software Patent Attorney',
      company     : 'Several Law Firms',
      description : 'Prepared hundreds of software flowcharts and state diagrams for startups, corporations, and universities.  Prepared and prosecuted patents in the fields of: ',
      end         : '11-2016',
      start       : '08-2010',
      bullets: [
        'Virtualized networks',
        'Cryptography',
        'Video encoding',
        'Bioinformatics',
      ],
    },
  ],
  education: [
    {
      school: 'UCLA School of Law',
      degree: 'Juris Doctor, 2010',
      bullets: [
        'GPA 3.33/4.00',
        'California State Bar: 275,663',
        'United States Patent and Trademark Office: 71,327',
      ],
    },
    {
      school: 'UCLA College of Letters and Sciences',
      degree: 'B.S. in Cybernetics, 2006',
      bullets: [
        'GPA 3.28/4.00',
        'Computer Science specialization',
        'Sat as a Computer Scientist for the Patent Bar'
      ],
    },
  ]
};

export default JASON;
