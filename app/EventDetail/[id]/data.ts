export interface EventDetail {
    id: string;
    title: string;
    subtitle: string;
    about: {
      title: string;
      description: string;
    };
    logo: {
      src: string;
      alt: string;
    };
    background: string;
}

export const events: EventDetail[] = [
    {
        id: "ibdc",
        title: "IBDC",
        subtitle: "Smart Bridges and Disaster Resilience Using BIM Technology Innovation to Achieve Sustainable Development Goals",
        about: {
          title: "About",
          description: "Bridge infrastructure is critical to improving accessibility, connectivity, and driving economic growth. As the demand and challenges in bridge construction increase, innovative solutions are key to overcoming these barriers. Advances in technology offer a path to efficient, innovative, and sustainable bridge construction. The International Bridge Design Contest (IBDC) provides an opportunity to hone participants' skills in designing bridges that are not only smart but also resilient to disasters and inline with the principles of sustainable development."
        },
        logo: {
          src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296428/CEIC/IBDc_r5ktrj.svg",
          alt: "IBDC Logo"
        },
        background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737347094/CEIC/dam1_b3mmu6.svg"
    },
  {
    id: "idic",
    title: "International Dam Innovation Contest",
    subtitle: "Smart and Sustainable Dam Construction by Leveraging Digitalization to Optimize Operations and Maintenance in Support of the SDGs",
    about: {
      title: "About",
      description: "As global environmental challenges increase, the need for innovative and sustainable solutions becomes more urgent. The International Dam Innovation Contest (IDIC) invites students to create ideas that change the way civil engineering is viewed in the field of water structures, especially dams. The competition includes innovations in efficient dam design, advanced digital water management technologies, environmentally friendly materials, and solutions for flood mitigation and optimal use of water resources. The ultimate goal is to create resilient and sustainable infrastructure for the future."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296426/CEIC/idic_ppvqds.svg",
      alt: "Dam Innovation Logo"
    }
    ,
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737347094/CEIC/dam1_b3mmu6.svg"
  },
  {
    id: "ibic",
    title: "International Bridge Design Contest",
    subtitle: "Smart Bridges and Disaster Resilience Using BIM Technology Innovation to Achieve Sustainable Development Goals",
    about: {
      title: "About",
      description: "Bridge infrastructure is critical to improving accessibility, connectivity, and driving economic growth. As the demand and challenges in bridge construction increase, innovative solutions are key to overcoming these barriers. Advances in technology offer a path to efficient, innovative, and sustainable bridge construction. The International Bridge Design Contest (IBDC) provides an opportunity to hone participants' skills in designing bridges that are not only smart but also resilient to disasters and in line with the principles of sustainable development."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg",
      alt: "Bridge Design Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737347094/CEIC/dam1_b3mmu6.svg"
  },  
  {
    id: "ipic",
    title: "International Paper Innovation Contest",
    subtitle: "Engineering Beyond Boundaries: Innovative Solutions for Tomorrow's Infrastructure Challenges",
    about: {
      title: "About",
      description: "As global infrastructure faces growing challenges, the need for bold, sustainable solutions is greater than ever. The International Paper Innovation Contest (IPIC) invites future innovators to present ideas that are redefining civil engineering, including IoT-based smart systems, sustainable materials, green mobility, water management breakthroughs, and advanced foundational technologies, all contributing to the cities of the future."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296430/CEIC/pic_qokbkn.svg",
      alt: "Paper Innovation Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737351013/CEIC/ipicbg_htlxy2.svg"
  },
  {
    id: "semnas",
    title: "National Seminar",
    subtitle: "Orchestrating the Future: Reshaping Infrastructure Through SDGs Based and Tech-Driven Innovations",
    about: {
      title: "About",
      description: "In the era of dynamic global transformation, the National Seminar is present as a strategic forum that brings together stakeholders, academics, and civil engineering practitioners to share ideas, research results, and innovative solutions on specific issues that encourage collaboration in combining Sustainable Development Goals (SDGs) with technological innovation to create smart and adaptive infrastructure. Through the discussion process, this seminar answers global challenges with progressive and visionary solutions for Indonesia's future infrastructure."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296733/CEIC/semnas_nqqcxt.svg",
      alt: "Paper Innovation Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737351013/CEIC/ipicbg_htlxy2.svg"
  },
  {
    id: "companyexpo",
    title: "Company Expo",
    subtitle: "Integrating technology with strategies for SDGs-based infrastructure resilience",
    about: {
      title: "About",
      description: "Company Expo is one of the series of events at the Civil Engineering Innovation Contest (CEIC) in 2025 which is an expo of several business entities in the engineering sector, especially in the field of civil engineering. The series of events are held to introduce the company to the general public and it is hoped that it can provide job opportunities for participants who attend to be able to join in accompanying the company that is introduced and is also looking for workers. With the theme that is presented, namely focusing on the integration between technological developments with infrastructure development strategies based on the concept of sustainable development (SDGs) so that they are able to face the development of the era and also global challenges. Not only a company expo, but the Company Expo CEIC Season XIII in 2025 is present to provide opportunities for MSME owners who want to introduce their products in an effort to seek profit and also branding their business through the MSME bazaar which we will also facilitate in the concept of the series of events \"Company Expo CEIC Season XIII 2025\"."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296429/CEIC/expo_g1a5xn.svg",
      alt: "Company Expo Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737351509/CEIC/companyexpos_mte9c7.svg"
  },
  {
    id: "bimworkshop",
    title: "BIM Workshop",
    subtitle: "Integrating BIM Technology to Achieve SDGs-Based Infrastructure Resilience",
    about: {
      title: "About",
      description: "This BIM Workshop event started in 2024 at the Civil Engineering Innovation Contest (CEIC). BIM automates the use of information, with the creation of information already automated. Moving from 3D modeling software, BIM demands the accuracy and ability to manage extensive information, along with practical compatibility for collaborative workflows. In today's digital construction era, a deep understanding of BIM is essential. To successfully navigate this landscape, participating in a BIM workshop is crucial. This workshop offers a practical opportunity to understand the complexities of BIM, ensuring that you are well prepared to excel in the digital era of Construction"
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296427/CEIC/bimworkshop_rjbnpx.svg",
      alt: "BIM Workshop Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737351634/CEIC/bimbgsvg_u43vcu.svg"
  },
];

export const getEventById = (id: string): EventDetail | undefined => {
  return events.find(event => event.id === id);
};

export interface TimelineItem {
    date: string;
    title: string;
    color?: 'coral' | 'turquoise'; // untuk styling yang berbeda
  }
  
  export interface VenueInfo {
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  }
  
  export interface Timeline {
    eventId: string;
    items: TimelineItem[];
    venue?: VenueInfo; // Optional venue info untuk semnas
  }
  
  export const timelines: Timeline[] = [
    {
      eventId: 'ibdc',
      items: [
        { date: 'January 22th - February 4th 2025', title: 'Open Registration Batch 1', color: 'coral' },
        { date: 'February 5th - March 5th 2025', title: 'Open Registration Batch 2', color: 'turquoise' },
        { date: 'March 7th 2025', title: 'Rise Studi Kasus', color: 'coral' },
        { date: 'March 8th 2025', title: 'Technical Meeting Peserta', color: 'coral' },
        { date: 'March 9th - April 7th 2025', title: 'Pengerjaan dan Pengumpulan Proposal Lomba', color: 'coral' },
        { date: 'April 4th 2025', title: 'Technical Meeting Juri', color: 'turquoise' },
        { date: 'April 7th - April 30th 2025', title: 'Penilaian Makalah Lomba', color: 'turquoise' },
        { date: 'May 1st 2025', title: 'Pengumuman Finalis dan Rilis COF Final Element', color: 'coral' },
        { date: 'May 2nd 2025', title: 'Technical Meeting Finalist', color: 'turquoise' },
        { date: 'May 12th 2025', title: 'Technical Meeting Juri (Final)', color: 'turquoise' },
        { date: 'May 11th 2025', title: 'Pengumpulan Video dan Poster', color: 'coral' },
        { date: 'May 14th 2025', title: 'Pengumpulan PPT Final', color: 'coral' },
        { date: 'May 16th 2025', title: 'Final Lomba', color: 'turquoise' },
        { date: 'May 17th 2025', title: 'Pengumuman Juara', color: 'coral' }
      ]
    },
    {
        eventId: 'idic',
        items: [
          { date: 'January 22th - February 4th 2025', title: 'Open Registration Batch 1', color: 'coral' },
          { date: 'February 5th - March 5th 2025', title: 'Open Registration Batch 2', color: 'turquoise' },
          { date: 'March 7th 2025', title: 'Rilis Studi Kasus', color: 'coral' },
          { date: 'March 8th 2025', title: 'Technical Meeting Peserta', color: 'coral' },
          { date: 'March 9th - April 7th 2025', title: 'Pengerjaan dan Pengumpulan Proposal Lomba', color: 'coral' },
          { date: 'April 4th 2025', title: 'Technical Meeting Juri', color: 'turquoise' },
          { date: 'April 7th - April 30th 2025', title: 'Penilaian Makalah Lomba', color: 'turquoise' },
          { date: 'May 1st 2025', title: 'Pengumuman Finalis dan Rilis TOR Final Semenet', color: 'coral' },
          { date: 'May 2nd 2025', title: 'Technical Meeting Finalist', color: 'turquoise' },
          { date: 'May 12th 2025', title: 'Technical Meeting Juri (Final)', color: 'turquoise' },
          { date: 'May 11th 2025', title: 'Pengumpulan Video dan Poster', color: 'coral' },
          { date: 'May 14th 2025', title: 'Pengumpulan PPT Final', color: 'coral' },
          { date: 'May 16th 2025', title: 'Final Lomba', color: 'turquoise' },
          { date: 'May 17th 2025', title: 'Pengumuman Juara', color: 'coral' }
        ]
      },
      {
        eventId: 'ibic',
        items: [
          { date: 'January 22th - February 4th 2025', title: 'Open Registration Batch 1', color: 'coral' },
          { date: 'February 5th - March 5th 2025', title: 'Open Registration Batch 2', color: 'turquoise' },
          { date: 'March 7th 2025', title: 'Rilis Studi Kasus', color: 'coral' },
          { date: 'March 8th 2025', title: 'Technical Meeting Peserta', color: 'coral' },
          { date: 'March 9th - April 7th 2025', title: 'Pengerjaan dan Pengumpulan Proposal Lomba', color: 'coral' },
          { date: 'April 4th 2025', title: 'Technical Meeting Juri', color: 'turquoise' },
          { date: 'April 7th - April 30th 2025', title: 'Penilaian Makalah Lomba', color: 'turquoise' },
          { date: 'May 1st 2025', title: 'Pengumuman Finalis dan Rilis TOR Final Semenet', color: 'coral' },
          { date: 'May 2nd 2025', title: 'Technical Meeting Finalist', color: 'turquoise' },
          { date: 'May 12th 2025', title: 'Technical Meeting Juri (Final)', color: 'turquoise' },
          { date: 'May 11th 2025', title: 'Pengumpulan Video dan Poster', color: 'coral' },
          { date: 'May 14th 2025', title: 'Pengumpulan PPT Final', color: 'coral' },
          { date: 'May 16th 2025', title: 'Final Lomba', color: 'turquoise' },
          { date: 'May 17th 2025', title: 'Pengumuman Juara', color: 'coral' }
        ]
      },
      {
        eventId: 'ipic',
        items: [
          { date: 'January 22th - February 23th 2025', title: 'Open Registration dan Pengumpulan Abstract', color: 'coral' },
          { date: 'March 5th 2025', title: 'Abstract Passes Announcement', color: 'turquoise' },
          { date: 'March 6th - March 19th 2025', title: 'Pengumpulan Full Paper Batch 1', color: 'coral' },
          { date: 'March 20th - April 16th 2025', title: 'Pengumpulan Full Paper Batch 2', color: 'turquoise' },
          { date: 'May 1st 2025', title: 'Pengumuman Finalis dan Rilis TOR', color: 'coral' },
          { date: 'May 2nd 2025', title: 'Technical Meeting Finalist', color: 'turquoise' },
          { date: 'May 3rd - May 9th 2025', title: 'Infograph Collecting', color: 'coral' },
          { date: 'May 10th - May 14th 2025', title: 'Favourite Infograph Voting + PPT Collecting', color: 'turquoise' },
          { date: 'May 16th 2025', title: 'Final (Presentation Day)', color: 'coral' },
          { date: 'May 17th 2025', title: 'Winner Announcement', color: 'turquoise' }
        ]
      },
      {
        eventId: 'semnas',
        items: [
          { date: 'May 17th 2025', title: 'D-Day National Seminar', color: 'turquoise' }
        ],
        venue: {
          name: 'Gedung Prof. Soedharto SH',
          address: 'Tembalang',
          city: 'Kota Semarang',
          province: 'Jawa Tengah',
          postalCode: '50275'
        }
      },
      {
        eventId: 'companyexpo',
        items: [
          { date: 'May 17th 2025', title: 'D-Day Company Expo', color: 'turquoise' }
        ],
        venue: {
          name: 'Gedung Prof. Soedharto SH',
          address: 'Tembalang',
          city: 'Kota Semarang',
          province: 'Jawa Tengah',
          postalCode: '50275'
        }
      },
      {
        eventId: 'bimworkshop',
        items: [          
            { date: 'May 25th 2025', title: 'BIM Workshop Series', color: 'coral' },
          { date: 'May 27th 2025', title: 'BIM Workshop Series', color: 'turquoise' }
        ],
        venue: {
          name: 'Gedung Teknik Sipil Universitas Diponegoro/ Online via Zoom Meetings',
          address: 'Tembalang',
          city: 'Kota Semarang',
          province: 'Jawa Tengah',
          postalCode: '50275'
        }
      }

  ];

  export function getVenueByEventId(id: string): VenueInfo | undefined {
    // Implementasi logika untuk mengambil data venue berdasarkan eventId
    const venueData: Record<string, VenueInfo> = {
        'semnas': {
            name: 'Nama Tempat',
            address: 'Alamat Lengkap',
            city: 'Kota',
            province: 'Provinsi',
            postalCode: '12345'
        },
        // Tambahkan data venue lainnya sesuai kebutuhan
    };

    return venueData[id];
}
  
  export const getTimelineByEventId = (eventId: string): Timeline | undefined => {
    return timelines.find(timeline => timeline.eventId === eventId);
  };


export interface Prize {
    place: string;
    amount: number;
    details: string;
}

export const eventPrizes: Record<string, Prize[]> = {
    ibdc: [
        { place: '1st Place', amount: 15000000, details: 'Trophy and Certificate' },
        { place: '2nd Place', amount: 10000000, details: 'Trophy and Certificate' },
        { place: '3rd Place', amount: 5000000, details: 'Trophy and Certificate' }
    ],
    ipic: [
        { place: '1st Place', amount: 5000000, details: 'Trophy and Plaque + Certificate' },
        { place: '2nd Place', amount: 4000000, details: 'Trophy and Plaque + Certificate' },
        { place: '3rd Place', amount: 3000000, details: 'Trophy and Plaque + Certificate' }
    ],
    idic: [
        { place: '1st Place', amount: 9000000, details: 'Trophy and Certificate' },
        { place: '2nd Place', amount: 6000000, details: 'Trophy and Certificate' },
        { place: '3rd Place', amount: 4000000, details: 'Trophy and Certificate' }
    ],
    ibic: [
        { place: '1st Place', amount: 9000000, details: 'Trophy and Certificate' },
        { place: '2nd Place', amount: 6000000, details: 'Trophy and Certificate' },
        { place: '3rd Place', amount: 4000000, details: 'Trophy and Certificate' }
    ]
};



export interface ContactPerson {
    name: string;
    phone: string;
}
  
  export interface EventRequirements {
    termOfReference?: string;
    registrationForm?: string;
    proposal?: string;
    registrationLink: string;
    contactPersons: ContactPerson[];
}
  
  export const eventRequirements: Record<string, EventRequirements> = {
    "ibic": {
      termOfReference: "https://drive.google.com/file/bridge-tor",
      registrationForm: "https://drive.google.com/file/bridge-form",
      proposal: "https://drive.google.com/file/bridge-proposal",
      registrationLink: "https://forms.gle/bridge-registration",
      contactPersons: [
        { name: "John", phone: "+6281234567890" },
        { name: "Jane", phone: "+6289876543210" }
      ]
    },
    "ipic": {
      termOfReference: "https://drive.google.com/file/earthquake-tor",
      registrationForm: "https://drive.google.com/file/earthquake-form",
      proposal: "https://drive.google.com/file/earthquake-proposal", 
      registrationLink: "https://forms.gle/earthquake-registration",
      contactPersons: [
        { name: "Mike", phone: "+6282345678901" },
        { name: "Sarah", phone: "+6288765432109" }
      ]
    },
    "idic": {
        termOfReference: "https://drive.google.com/file/earthquake-tor",
        registrationForm: "https://drive.google.com/file/earthquake-form",
        proposal: "https://drive.google.com/file/earthquake-proposal", 
        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Mike", phone: "+6282345678901" },
          { name: "Sarah", phone: "+6288765432109" }
        ]
    },
    "ibdc": {
        termOfReference: "https://drive.google.com/file/earthquake-tor",
        registrationForm: "https://drive.google.com/file/earthquake-form",
        proposal: "https://drive.google.com/file/earthquake-proposal", 
        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Mike", phone: "+6282345678901" },
          { name: "Sarah", phone: "+6288765432109" }
        ]
    },
    "bimworkshop": {
        termOfReference: "https://drive.google.com/file/earthquake-tor",
        registrationForm: "https://drive.google.com/file/earthquake-form",
        proposal: "https://drive.google.com/file/earthquake-proposal", 
        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Mike", phone: "+6282345678901" },
          { name: "Sarah", phone: "+6288765432109" }
        ]
    },
    "companyexpo": {
        termOfReference: "https://drive.google.com/file/earthquake-tor",
        registrationForm: "https://drive.google.com/file/earthquake-form",
        proposal: "https://drive.google.com/file/earthquake-proposal", 
        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Mike", phone: "+6282345678901" },
          { name: "Sarah", phone: "+6288765432109" }
        ]
    },
    "semnas": {

        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Mike", phone: "+6282345678901" },
          { name: "Sarah", phone: "+6288765432109" }
        ]
    }
    // Tambahkan event lainnya sesuai kebutuhan
  };