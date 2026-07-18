export type StudyFormat = "online" | "offline" | "hybrid";

export interface ProgramCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  imageUrl: string | null;
  targetAudience: string | null;
  displayOrder: number;
  courseCount: number;
  isCore: boolean;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
  program: Pick<ProgramCategory, "id" | "name" | "slug">;
}

export interface OrderedContent {
  id: string;
  title?: string;
  content?: string;
  description?: string | null;
  objective?: string | null;
  sessionCount?: number | null;
  materialType?: string | null;
  note?: string | null;
  displayOrder: number;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  thumbnailUrl: string | null;
  category: CourseCategory;
  levelLabel: string;
  levelFrom: string | null;
  levelTo: string | null;
  sessionCount: number;
  sessionDurationMinutes: number | null;
  durationText: string | null;
  classSizeText: string | null;
  studyFormat: StudyFormat;
  originalPrice: number | null;
  price: number | null;
  priceDisplay: string | null;
  currency: string;
  discountPercent: number | null;
  textbookSummary: string | null;
  expectedOutcomesSummary: string | null;
  isFeatured: boolean;
  publishedAt: string | null;
  displayOrder: number;
  audiences: OrderedContent[];
  roadmapStages: OrderedContent[];
  curriculumItems: OrderedContent[];
  outcomes: OrderedContent[];
}

export type CourseSort = "default" | "newest" | "price-asc" | "price-desc";

export interface CourseFilters {
  program?: string;
  sort?: CourseSort;
}
