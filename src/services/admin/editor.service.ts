import "server-only";
import { notFound } from "next/navigation";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";
import { requireAdmin } from "@/services/admin/auth.service";

export const editorConfigs = {
  courses:{table:"courses",title:"khóa học",list:"/admin/courses",fields:["category_id","title","slug","short_description","description","thumbnail_url","level_label","level_from","level_to","session_count","session_duration_minutes","duration_text","study_format","class_size_text","price","original_price","price_display","is_featured","status","published_at"],media:{field:"thumbnail_url",folder:"courses",label:"Ảnh đại diện khóa học",aspect:"16/9"}},
  posts:{table:"blog_posts",title:"bài viết",list:"/admin/posts",fields:["category_id","author_expert_id","title","slug","excerpt","content","cover_image_url","cover_image_alt","seo_title","seo_description","source_title","source_url","source_publisher","source_note","is_featured","status","published_at"],media:{field:"cover_image_url",folder:"posts",label:"Ảnh bìa bài viết",aspect:"16/9"}},
  resources:{table:"resources",title:"tài liệu",list:"/admin/resources",fields:["category_id","title","slug","author_name","short_description","description","resource_type","thumbnail_url","file_url","external_url","file_name","mime_type","access_type","status","is_featured","published_at"],media:{field:"thumbnail_url",folder:"resources",label:"Ảnh tài nguyên",aspect:"16/9"}},
  testimonials:{table:"success_stories",title:"cảm nhận",list:"/admin/testimonials",fields:["student_name","title","slug","quote","description","content","image_url","consent_confirmed","status","published_at","display_order"],media:{field:"image_url",folder:"testimonials",label:"Ảnh câu chuyện học viên",aspect:"1/1"}},
  faqs:{table:"faqs",title:"FAQ",list:"/admin/faqs",fields:["category_id","question","answer","is_featured","is_active","display_order"],media:null},
} as const;
export type EditorSection=keyof typeof editorConfigs;
export function isEditorSection(value:string):value is EditorSection{return value in editorConfigs}

export async function getEditorRecord(section:EditorSection,id:string){await requireAdmin();if(id==='new')return null;if(!/^[0-9a-f-]{36}$/i.test(id))notFound();const db=await createSupabaseAuthServerClient();const{data,error}=await db.from(editorConfigs[section].table).select('*').eq('id',id).maybeSingle();if(error)throw new Error('ADMIN_EDITOR_READ');if(!data)notFound();return data as Record<string,unknown>}
