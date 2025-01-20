interface EventDetail {
  tema: string;
  tentang: string;
  sasaran?: string;
  tempat?: string;
  tanggal?: string;
  reward: string;
  pendaftaran: string;
  logo: string;
  image: string;
}

interface Event {
  title: string;
  theme: string;
  description: string;
  date: string;
  image: string;
  logo: string;
  slug: string;
}

const COMPETITION_REWARDS = {
  TIER_1: {
    first: "Rp 9.000.000,00",
    second: "Rp 6.000.000,00",
    third: "Rp 4.000.000,00",
    hope1: "Rp 2.000.000,00",
    hope2: "Rp 1.500.000,00"
  },
  TIER_2: {
    first: "Rp 5.000.000,00",
    second: "Rp 4.000.000,00",
    third: "Rp 3.000.000,00",
    hope1: "Rp 1.500.000,00",
    hope2: "Rp 1.000.000,00"
  }
};

export const eventDetails: Record<string, EventDetail> = {
  "IBDC": {
    tema: "\"Smart Bridges and Disaster Resilience Using BIM Technology Innovation to Achieve Sustainable Development Goals\"",
    tentang: "Infrastruktur jembatan sangat penting untuk meningkatkan aksesibilitas, konektivitas, serta mendorong pertumbuhan ekonomi. Seiring meningkatnya permintaan dan tantangan dalam konstruksi jembatan, solusi inovatif menjadi kunci untuk mengatasi hambatan tersebut. Kemajuan teknologi menawarkan jalan menuju pembangunan jembatan yang efisien, inovatif, dan berkelanjutan. International Bridge Design Contest (IBDC) memberikan kesempatan untuk mengasah keterampilan peserta dalam merancang jembatan yang tidak hanya cerdas tetapi juga tangguh terhadap bencana serta sejalan dengan prinsip pembangunan berkelanjutan.",
    reward: Object.entries(COMPETITION_REWARDS.TIER_1)
      .map(([place, amount]) => `${place}: ${amount}`)
      .join('\n'),
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296428/CEIC/IBDc_r5ktrj.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296428/CEIC/IBDc_r5ktrj.svg"
  },
  "IDIC": {
    tema: "\"Smart and Sustainable Dam Construction by Leveraging Digitalization to Optimize Operations and Maintenance in Support of the SDGs\"",
    tentang: "Seiring dengan meningkatnya tantangan lingkungan global, kebutuhan akan solusi inovatif dan berkelanjutan menjadi semakin penting. International Dam Innovation Contest (IDIC) mengajak mahasiswa untuk menciptakan ide-ide yang mengubah cara pandang terhadap teknik sipil dalam bidang bangunan air, khususnya bendungan. Kompetisi ini meliputi inovasi dalam desain bendungan yang efisien, teknologi digital pengelolaan air yang maju, material ramah lingkungan, serta solusi untuk mitigasi banjir dan pemanfaatan sumber daya air secara optimal.",
    reward: Object.entries(COMPETITION_REWARDS.TIER_1)
      .map(([place, amount]) => `${place}: ${amount}`)
      .join('\n'),
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296426/CEIC/idic_ppvqds.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296426/CEIC/idic_ppvqds.svg"
  },
  "IBIC": {
    tema: "\"Optimizing BIM to Achieve Sustainable Development Goals: Integrating Technology for Collaborative Green Building and Resilient Infrastructure\"",
    tentang: "Salah satu tantangan penting dalam mencapai tujuan Pembangunan Berkelanjutan (SDGs) adalah mewujudkan infrastruktur yang tidak hanya memenuhi kebutuhan saat ini, tetapi juga berkelanjutan di masa depan. Pemanfaatan teknologi Building Information Modeling (BIM) memungkinkan perencanaan, desain, dan pelaksanaan proyek infrastruktur secara lebih efisien, efektif, dan berkelanjutan.",
    reward: Object.entries(COMPETITION_REWARDS.TIER_1)
      .map(([place, amount]) => `${place}: ${amount}`)
      .join('\n'),
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg"
  },
  "IPIC": {
    tema: "\"Engineering Beyond Boundaries: Innovative Solutions for Tomorrow's Infrastructure Challenges\"",
    tentang: "Ketika infrastruktur global menghadapi tantangan yang terus berkembang, kebutuhan akan solusi yang berani dan berkelanjutan semakin besar. International Paper Innovation Contest (IPIC) mengundang inovator masa depan untuk mempresentasikan ide-ide yang mendefinisikan kembali teknik sipil.",
    reward: Object.entries(COMPETITION_REWARDS.TIER_2)
      .map(([place, amount]) => `${place}: ${amount}`)
      .join('\n'),
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296430/CEIC/pic_qokbkn.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296430/CEIC/pic_qokbkn.svg"
  },
  "SEMNAS": {
    tema: "\"Orchestrating the Future: Reshaping Infrastructure Through SDGs Based and Tech-Driven Innovations\"",
    tentang: "Di era transformasi global yang dinamis, Seminar Nasional hadir sebagai wadah strategis yang mempertemukan pemangku kepentingan, akademisi, dan praktisi teknik sipil untuk berbagi gagasan, hasil riset, dan solusi inovatif.",
    sasaran: "Khalayak umum seluruh Indonesia",
    tempat: "Gedung Prof. Soedarto/Muladi Dome Universitas Diponegoro",
    tanggal: "2025-05-17",
    reward: "",
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296733/CEIC/semnas_nqqcxt.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296733/CEIC/semnas_nqqcxt.svg"
  },
  "COMPEX": {
    tema: "\"Integrating technology with strategies for SDGs-based infrastructure resilience\"",
    tentang: "Company Expo merupakan salah satu rangkaian acara pada Civil Engineering Inovation Contest (CEIC) tahun 2025 yang merupakan expo dari beberapa badan usaha pada lingkup teknik terutama pada bidang teknik sipil.",
    sasaran: "Khalayak umum seluruh Indonesia",
    tempat: "Gedung Prof. Soedarto/Muladi Dome Universitas Diponegoro",
    tanggal: "2025-05-17",
    reward: "",
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296429/CEIC/expo_g1a5xn.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296429/CEIC/expo_g1a5xn.svg"
  },
  "BIM": {
    tema:"\"Integrating BIM Technology to Achieve SDGs-Based Infrastructure Resilience\"",
    tentang: "Event BIM Workshop ini dimulai pada Tahun 2024 pada Civil Engineering Innovation Contest (CEIC). BIM mengotomatisasi penggunaan informasi, dengan penciptaan informasi yang sudah terotomatisasi.",
    sasaran: "Khalayak umum seluruh Indonesia",
    tempat: "Kampus Teknik Sipil Universitas Diponegoro dan Zoom Meeting",
    tanggal: "2025-02-22",
    reward: "",
    pendaftaran: "https://example.com/register",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296427/CEIC/bimworkshop_rjbnpx.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296427/CEIC/bimworkshop_rjbnpx.svg"
  }
};

export const events: Event[] = [
  {
    title: "Seminar Nasional",
    theme: "\"Orchestrating the Future: Reshaping Infrastructure Through SDGs Based and Tech-Driven Innovations\"", // Sesuai dengan eventDetails.SEMNAS.tema
    description: "Seminar nasional yang mempertemukan pemangku kepentingan, akademisi, dan praktisi teknik sipil untuk berbagi gagasan inovatif.",
    date: "2025-05-17",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296733/CEIC/semnas_nqqcxt.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296733/CEIC/semnas_nqqcxt.svg",
    slug: "semnas"
  },
  {
    title: "International Bridge Design Contest",
    theme: "\"Smart Bridges and Disaster Resilience Using BIM Technology Innovation to Achieve Sustainable Development Goals\"", // Sesuai dengan eventDetails.IBDC.tema
    description: "Kompetisi desain jembatan internasional yang menantang peserta untuk merancang jembatan yang cerdas dan tangguh terhadap bencana.",
    date: "2025-02-20",
    slug: "ibdc",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296428/CEIC/IBDc_r5ktrj.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296428/CEIC/IBDc_r5ktrj.svg",
    
  },
  {
    title: "International BIM Innovation Contest",
    theme: "\"Optimizing BIM to Achieve Sustainable Development Goals: Integrating Technology for Collaborative Green Building and Resilient Infrastructure\"", // Sesuai dengan eventDetails.IBIC.tema
    description: "Kompetisi inovasi BIM yang mengajak peserta untuk mengoptimalkan teknologi BIM dalam mencapai pembangunan berkelanjutan.",
    date: "2025-03-10",
    slug: "ibic",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296431/CEIC/bic_l49rpm.svg"
  },
  {
    title: "International Paper Innovation Contest",
    theme: "\"Engineering Beyond Boundaries: Innovative Solutions for Tomorrow's Infrastructure Challenges\"", // Sesuai dengan eventDetails.IPIC.tema
    description: "Kompetisi paper inovatif yang mendorong solusi kreatif untuk tantangan infrastruktur masa depan.",
    date: "2025-04-05",
    slug: "ipic",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296430/CEIC/pic_qokbkn.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296430/CEIC/pic_qokbkn.svg"
  },
  {
    title: "International Dam Innovation Contest",
    theme: "\"Smart and Sustainable Dam Construction by Leveraging Digitalization to Optimize Operations and Maintenance in Support of the SDGs\"", // Sesuai dengan eventDetails.IDIC.tema
    description: "Kompetisi inovasi bendungan yang berfokus pada digitalisasi dan optimasi operasional berkelanjutan.",
    date: "2025-05-15",
    slug: "idic",    
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296426/CEIC/idic_ppvqds.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296426/CEIC/idic_ppvqds.svg"
  },
  {
    title: "Company Expo",
    theme: "\"Integrating technology with strategies for SDGs-based infrastructure resilience\"", // Sesuai dengan eventDetails.COMPEX.tema
    description: "Pameran perusahaan dan UMKM yang menampilkan integrasi teknologi dalam pembangunan infrastruktur berkelanjutan.",
    date: "2025-05-17",
    slug: "companyexpo",
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296429/CEIC/expo_g1a5xn.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296429/CEIC/expo_g1a5xn.svg"
  },
  {
    title: "BIM Workshop",
    theme: "\"Integrating BIM Technology to Achieve SDGs-Based Infrastructure Resilience\"", // Sesuai dengan eventDetails.BIM.tema
    description: "Workshop praktis tentang implementasi teknologi BIM dalam mencapai infrastruktur berkelanjutan.",
    date: "2025-02-22",
    slug: "bimworkshop", 
    logo: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296427/CEIC/bimworkshop_rjbnpx.svg",
    image: "https://res.cloudinary.com/dbftqxgwn/image/upload/v1737296427/CEIC/bimworkshop_rjbnpx.svg"
  }
];

