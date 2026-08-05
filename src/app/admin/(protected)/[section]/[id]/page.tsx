import { notFound } from "next/navigation";
import { AdminEditor } from "@/components/admin/AdminEditor";
import {
  getEditorOptions,
  getEditorRecord,
  isEditorSection,
} from "@/services/admin/editor.service";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ section: string; id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { section, id } = await params;
  if (!isEditorSection(section)) notFound();
  const [record, options] = await Promise.all([
    getEditorRecord(section, id),
    getEditorOptions(section),
  ]);
  const { error } = await searchParams;
  return (
    <AdminEditor
      section={section}
      id={id}
      record={record}
      options={options}
      error={error}
    />
  );
}
