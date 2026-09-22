import { TeamMember, DentalPlan, SectionSlide } from '../types';

export const CLINIC_INFO = {
  name: 'Clínica Antares Odontologia',
  city: 'Maceió',
  state: 'AL',
  neighborhood: 'Antares',
  address: 'Antares, Maceió — AL',
  phoneDisplay: '(82) 99821-8190',
  phoneRaw: '5582998218190',
  whatsappUrl: 'https://wa.link/cfvx67',
  instagramUrl: 'https://www.instagram.com/antaresodontologia?stkn=MXV2cmswMDVuaWk0Mg==',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ377bQMpJAQcRd8Z2kBuHepo',
  mapsUrl: 'https://maps.app.goo.gl/Kzjwf4mCRN8aAEDQA?g_st=ac',
  tagline: 'Seu sorriso merece esse cuidado.',
  description: 'Odontologia com atendimento especializado, profissionais qualificados e cuidado personalizado para você.',
  aboutText: 'Pensando em facilitar o cuidado com o seu sorriso, nossa clínica oferece atendimento odontológico com profissionais qualificados e uma estrutura preparada para oferecer conforto, segurança e qualidade.',
  hours: [
    { period: 'Manhã', time: '08h às 12h' },
    { period: 'Tarde', time: '14h às 17h' }
  ]
};

export const SECTIONS: SectionSlide[] = [
  { id: 'inicio', title: 'Início', shortLabel: 'Hero' },
  { id: 'clinica', title: 'A Clínica', shortLabel: 'Clínica' },
  { id: 'equipe', title: 'Nossa Equipe', shortLabel: 'Equipe' },
  { id: 'planos', title: 'Convênios & Planos', shortLabel: 'Planos' },
  { id: 'horarios', title: 'Horário de Atendimento', shortLabel: 'Horário' },
  { id: 'contato', title: 'Agendamento & Contato', shortLabel: 'Contato' },
  { id: 'localizacao', title: 'Localização', shortLabel: 'Local' },
  { id: 'avaliacoes', title: 'Avalie no Google', shortLabel: 'Avalie' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dra-alice-rocha',
    name: 'Dra. Alice Rocha',
    cro: 'CRO/AL 4892',
    role: 'Cirurgiã-Dentista',
    initials: 'AR',
    highlight: 'Atendimento Clínico & Estética Dental'
  },
  {
    id: 'dra-atilanna-nunes',
    name: 'Dra. Atilanna Nunes',
    cro: 'CRO/AL 5606',
    role: 'Cirurgiã-Dentista',
    initials: 'AN',
    highlight: 'Prevenção & Odontologia Integrada'
  },
  {
    id: 'dr-anselmo-rastelli',
    name: 'Dr. Anselmo Rastelli',
    cro: 'CRO/AL 5437',
    role: 'Cirurgião-Dentista / Ortodontista',
    specialty: 'Ortodontista',
    initials: 'AR',
    highlight: 'Ortodontia & Alinhadores'
  },
  {
    id: 'dra-mirely-duarte',
    name: 'Dra. Mirely Duarte',
    cro: 'CRO/AL 4873',
    role: 'Cirurgiã-Dentista',
    initials: 'MD',
    highlight: 'Clínica Geral & Harmonização'
  },
  {
    id: 'dra-rayssa-carla',
    name: 'Dra. Rayssa Carla',
    cro: 'CRO/AL 5148',
    role: 'Cirurgiã-Dentista / Prótese e Implantes Dentários',
    specialty: 'Prótese e Implantes Dentários',
    initials: 'RC',
    highlight: 'Reabilitação Oral & Implantes'
  }
];

export const DENTAL_PLANS: DentalPlan[] = [
  {
    id: 'hapvida',
    name: 'Hapvida',
    category: 'Odonto',
    accentColor: '#005696',
    symbol: 'HV',
    logoUrl: '/assets/plans/hapvida.svg'
  },
  {
    id: 'sulamerica',
    name: 'SulAmérica Odonto',
    category: 'Odonto',
    accentColor: '#FF6700',
    symbol: 'SA',
    logoUrl: '/assets/plans/sulamerica.svg'
  },
  {
    id: 'bradesco',
    name: 'Bradesco Dental',
    category: 'Dental',
    accentColor: '#CC092F',
    symbol: 'BD',
    logoUrl: '/assets/plans/bradesco.svg'
  },
  {
    id: 'odontoprev',
    name: 'Odontoprev',
    category: 'Líder Dental',
    accentColor: '#00843D',
    symbol: 'OP',
    logoUrl: '/assets/plans/odontoprev.svg'
  },
  {
    id: 'unimed',
    name: 'Unimed Odonto',
    category: 'Odonto Nacional',
    accentColor: '#00995D',
    symbol: 'UO',
    logoUrl: '/assets/plans/unimed.svg'
  },
  {
    id: 'riachuelo',
    name: 'Riachuelo',
    category: 'Cartão / Convênio',
    accentColor: '#1A1A1A',
    symbol: 'RC',
    logoUrl: '/assets/plans/riachuelo.svg'
  },
  {
    id: 'brasildental',
    name: 'BrasilDental',
    category: 'BB Dental',
    accentColor: '#FED100',
    textColor: '#1A1A1A',
    symbol: 'BD',
    logoUrl: '/assets/plans/brasildental.png'
  },
  {
    id: 'odontogroup',
    name: 'OdontoGroup',
    category: 'Convênio Dental',
    accentColor: '#0072CE',
    symbol: 'OG',
    logoUrl: '/assets/plans/odontogroup.png'
  },
  {
    id: 'privian',
    name: 'Privian',
    category: 'Grupo Odontoprev',
    accentColor: '#4A154B',
    symbol: 'PV',
    logoUrl: '/assets/plans/odontoprev.svg'
  },
  {
    id: 'rede-dental',
    name: 'Rede Dental',
    category: 'Convênio Dental',
    accentColor: '#008542',
    symbol: 'RD'
  },
  {
    id: 'dentalwhite',
    name: 'DentalWhite',
    category: 'Planos Odonto',
    accentColor: '#0D9488',
    symbol: 'DW'
  }
];
