import { adminListSchema } from "@/validation/admin";
export async function parseAdminParams(value:Promise<Record<string,string|undefined>>){return adminListSchema.parse(await value)}
export const dateCell=(value:unknown)=>value?new Intl.DateTimeFormat('vi-VN',{dateStyle:'short'}).format(new Date(String(value))):'—';
