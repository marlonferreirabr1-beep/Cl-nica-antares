export interface TeamMember {
  id: string;
  name: string;
  cro: string;
  role: string;
  specialty?: string;
  initials: string;
  highlight?: string;
}

export interface DentalPlan {
  id: string;
  name: string;
  category?: string;
  badge?: string;
  accentColor: string;
  textColor?: string;
  symbol: string;
  logoUrl?: string;
}

export interface ClinicHours {
  period: string;
  time: string;
  isOpenNow?: boolean;
}

export interface SectionSlide {
  id: string;
  title: string;
  shortLabel: string;
}
