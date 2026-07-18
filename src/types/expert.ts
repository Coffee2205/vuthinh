export interface ExpertQualification {
  id: string;
  expert_id: string;
  qualification_type: string;
  title: string;
  institution: string | null;
  description: string | null;
  issue_date: string | null;
  certificate_url: string | null;
  display_order: number;
}

export interface ExpertSpecialization {
  id: string;
  expert_id: string;
  name: string;
  description: string | null;
  display_order: number;
}

export interface ConsultationServiceBenefit {
  id: string;
  service_id: string;
  content: string;
  display_order: number;
}

export interface ConsultationService {
  id: string;
  expert_id: string;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  service_type: string;
  duration_minutes_min: number | null;
  duration_minutes_max: number | null;
  price: number | null;
  price_from: number | null;
  price_to: number | null;
  currency: string;
  price_unit: string | null;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  consultation_service_benefits: ConsultationServiceBenefit[];
}

export interface ExpertFaq {
  id: string;
  expert_id: string;
  question: string;
  answer: string;
  display_order: number;
  is_active: boolean;
}

export interface Expert {
  id: string;
  full_name: string;
  slug: string;
  professional_title: string;
  short_bio: string | null;
  biography: string | null;
  consultation_philosophy: string | null;
  avatar_url: string | null;
  introduction_video_url: string | null;
  languages: string[];
  is_active: boolean;
  display_order: number;
  expert_qualifications: ExpertQualification[];
  expert_specializations: ExpertSpecialization[];
  consultation_services: ConsultationService[];
  expert_faqs: ExpertFaq[];
}
