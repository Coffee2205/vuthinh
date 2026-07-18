export interface SuccessStory { id:string; title:string; slug:string|null; content:string|null; description:string|null; quote:string|null; student_name:string|null; image_url:string|null; status:string; consent_confirmed:boolean; published_at:string|null; display_order:number }
export interface FaqCategory { id:string; name:string; slug:string; description:string|null; display_order:number; is_active:boolean }
export interface PublicFaq { id:string; category_id:string|null; question:string; answer:string; is_featured:boolean; is_active:boolean; display_order:number }
export interface JobPost { id:string; title:string; slug:string; description:string|null; requirements:string|null; employment_type:string|null; location:string|null; application_deadline:string|null; status:string; published_at:string|null; display_order:number }
export interface SiteSettings { organization: Record<string, unknown>; contact: Record<string, unknown> }
export interface PublicFormState { status:"idle"|"validation_error"|"database_error"; message?:string; fieldErrors?:Record<string,string[]>; values?:Record<string,string> }
export interface PublicCourseOption { id:string; title:string; slug:string }
