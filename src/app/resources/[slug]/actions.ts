"use server";
import { redirect } from "next/navigation";
import { createResourceDownloadEvent, getResourceBySlug, getResourceTarget } from "@/services/resource.service";
export async function downloadPublicResource(slug: string) { if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("RESOURCE_NOT_AVAILABLE"); const resource = await getResourceBySlug(slug); if (!resource || resource.access_type !== "public") throw new Error("RESOURCE_NOT_AVAILABLE"); const target = getResourceTarget(resource); if (!target) throw new Error("RESOURCE_LINK_NOT_AVAILABLE"); await createResourceDownloadEvent(resource.id); redirect(target) }
