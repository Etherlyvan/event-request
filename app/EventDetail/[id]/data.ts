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
        background:"https://res.cloudinary.com/dbftqxgwn/image/upload/v1737431046/CEIC/ibdcbg_bttt0b.webp"
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
      description: "One of the important challenges in achieving the Sustainable Development Goals (SDGs) is to create infrastructure that not only meets current needs but is also sustainable in the future. The use of Building Information Modeling (BIM) technology allows for more efficient, effective and sustainable planning, design and implementation of infrastructure projects. By seeing this opportunity, the International BIM Innovation Contest Civil Engineering Innovation Contest (IBIC) is here as a step to provide insight and improve students' BIM competencies in facing future challenges in strengthening sustainable infrastructure resilience."
    },
    logo: {
      src: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg",
      alt: "Bridge Design Logo"
    },
    background: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737431047/CEIC/ibicbg_cg6ox4.jpg"
    
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
        { date: 'January 22 – February 4, 2025', title: 'First Wave Registration', color: 'coral' },
        { date: 'February 5 – March 5, 2025', title: 'Second Wave Registration', color: 'turquoise' },
        { date: 'March 7, 2025', title: 'Case Study Release', color: 'coral' },
        { date: 'March 8, 2025', title: 'Technical Meeting', color: 'coral' },
        { date: 'March 9 – April 7, 2025', title: 'Proposal Preparation and Submission', color: 'coral' },
        { date: 'May 1, 2025', title: 'Finalist Announcement', color: 'coral' },
        { date: 'May 2, 2025', title: 'Technical Meeting for Final', color: 'turquoise' },
        { date: 'May 11, 2025', title: 'Submission of Finalist Videos and Posters', color: 'coral' },
        { date: 'May 14, 2025', title: 'Submission of Finalist PPTs', color: 'coral' },
        { date: 'May 16, 2025', title: 'Final Stage', color: 'turquoise' },
        { date: 'May 17, 2025', title: 'Winner Announcement', color: 'coral' }
      ]
    },
    {
      eventId: 'idic',
      items: [
        { date: 'January 22 – February 4, 2025', title: 'First Wave Registration', color: 'coral' },
        { date: 'February 5 – March 5, 2025', title: 'Second Wave Registration', color: 'turquoise' },
        { date: 'March 7, 2025', title: 'Case Study Release', color: 'coral' },
        { date: 'March 8, 2025', title: 'Technical Meeting', color: 'coral' },
        { date: 'March 9 – April 7, 2025', title: 'Proposal Preparation and Submission', color: 'coral' },
        { date: 'May 1, 2025', title: 'Finalist Announcement', color: 'coral' },
        { date: 'May 2, 2025', title: 'Technical Meeting for Final', color: 'turquoise' },
        { date: 'May 11, 2025', title: 'Submission of Finalist Videos and Posters', color: 'coral' },
        { date: 'May 14, 2025', title: 'Submission of Finalist PPTs', color: 'coral' },
        { date: 'May 16, 2025', title: 'Final Stage', color: 'turquoise' },
        { date: 'May 17, 2025', title: 'Winner Announcement', color: 'coral' }
      ]
    },
    {
      eventId: 'ibic',
      items: [
        { date: 'January 22 – February 4, 2025', title: 'First Wave Registration', color: 'coral' },
        { date: 'February 5 – March 5, 2025', title: 'Second Wave Registration', color: 'turquoise' },
        { date: 'March 7, 2025', title: 'Case Study Release', color: 'coral' },
        { date: 'March 8, 2025', title: 'Technical Meeting', color: 'coral' },
        { date: 'March 9 – April 7, 2025', title: 'Proposal Preparation and Submission', color: 'coral' },
        { date: 'May 1, 2025', title: 'Finalist Announcement', color: 'coral' },
        { date: 'May 2, 2025', title: 'Technical Meeting for Final', color: 'turquoise' },
        { date: 'May 11, 2025', title: 'Submission of Finalist Videos and Posters', color: 'coral' },
        { date: 'May 14, 2025', title: 'Submission of Finalist PPTs', color: 'coral' },
        { date: 'May 16, 2025', title: 'Final Stage', color: 'turquoise' },
        { date: 'May 17, 2025', title: 'Winner Announcement', color: 'coral' }
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
        { place: '1st Place', amount: 9000000, details: 'Trophy and Certificate' },
        { place: '2nd Place', amount: 6000000, details: 'Trophy and Certificate' },
        { place: '3rd Place', amount: 4000000, details: 'Trophy and Certificate' }
    ],
    ipic: [
        { place: '1st Place', amount: 7000000, details: 'Trophy and Plaque + Certificate' },
        { place: '2nd Place', amount: 5000000, details: 'Trophy and Plaque + Certificate' },
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
      termOfReference: "https://drive.google.com/drive/folders/1luh7dwqOM3S1Z6iDbJC8YH89x7H-C2yl",
      proposal: "https://bit.ly/AdditionalFilesForIBIC",
      registrationLink: "https://bit.ly/RegistrationIBIC_CEICXIII",
      contactPersons: [
        { name: "Muhammad Raihan Harsaputra", phone: "+62 895-6204-81888" },
        { name: "Sifa Alega Pasya", phone: "+62 882-1641-5371" }
      ]
    },
    "ipic": {
      termOfReference: "https://drive.google.com/drive/folders/1Ewtn--A1KWTDQ_Bp2NBTg652LzqCXASb",
      proposal: "https://bit.ly/BerkasIPIC_CEICXIII", 
      registrationLink: "https://bit.ly/RegistrationIPIC_CEICXIII",
      contactPersons: [
        { name: "Kirana Pramesti R", phone: "+0895622588928" },
        { name: "Aliyyah Syifa Nur Hasna", phone: "+082210408388" }


      ]
    },
    "idic": {
        termOfReference: "https://drive.google.com/drive/folders/1VHjep0gcMrFS42QPBBb4BlCBhdmSzDA-",
        proposal: "https://bit.ly/AdditionalFilesforIDIC", 
        registrationLink: "https://bit.ly/RegistrationIDIC_CEICXIII",
        contactPersons: [
          { name: "Arlinda", phone: "089518279078" },
          { name: "Zamdi Ahmad Majid", phone: "081228925677" }
        ]
    },
    "ibdc": {
        termOfReference: "https://drive.google.com/drive/folders/1kPIHEwF8ORUp5Jt1IRA-HoaLrSVcBE2P",
        proposal: "https://bit.ly/AdditionalFilesForIBDC", 
        registrationLink: "https://bit.ly/RegistrationIBDC_CEICXIII",
        contactPersons: [
          { name: "Thifal", phone: "+6289524574454" },
          { name: "Icad", phone: "+6285711307412" }
        ]
    },
    "bimworkshop": {
        registrationLink: "https://bit.ly/RegistrationBIMWorkshop_CEICXIII",
        contactPersons: [
          { name: "Daffa", phone: "+6285947422485" },
          { name: "Azka Al-Afa", phone: "+6285950281765" }
        ]
    },
    "companyexpo": {
        registrationLink: "https://forms.gle/earthquake-registration",
        contactPersons: [
          { name: "Aurel", phone: "+628813795431" },
          { name: "Bagus Adhitya", phone: "+628821519744" }
        ]
    },
    "semnas": {

        registrationLink: "https://bit.ly/RegistrationNationalSeminar_CEICXIII",
        contactPersons: [
          { name: "Ayesha", phone: " +6282180888643" },
          { name: "Uli ", phone: "+6288216748367" }
        ]
    }
    // Tambahkan event lainnya sesuai kebutuhan
  };