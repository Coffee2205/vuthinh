import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/common/Container";
import { PublicSubmissionForm } from "@/components/forms/PublicSubmissionForm";
import { getJobBySlug } from "@/services/support.service";
import { submitJob } from "@/app/support-actions";
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job)
    return {
      title: "Không tìm thấy vị trí tuyển dụng",
      robots: { index: false, follow: false },
    };
  const description = job.description?.replace(/\s+/g, " ").trim();
  return createPageMetadata({
    title: job.title,
    description: description
      ? `${description.slice(0, 157)}${description.length > 157 ? "..." : ""}`
      : `Thông tin tuyển dụng vị trí ${job.title} tại Vũ Thịnh.`,
    path: `/careers/${job.slug}`,
  });
}
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { slug } = await params;
  const { submitted } = await searchParams;
  const job = await getJobBySlug(slug);
  if (!job) notFound();
  return (
    <main>
      <section className="bg-slate-50 py-14">
        <Container>
          <h1 className="text-4xl font-bold sm:text-5xl">{job.title}</h1>
          <p className="mt-4 text-slate-600">
            {job.location || "Địa điểm sẽ trao đổi"}
            {job.employment_type ? ` · ${job.employment_type}` : ""}
          </p>
          {job.description && (
            <p className="mt-6 max-w-3xl whitespace-pre-line leading-8 text-slate-700">
              {job.description}
            </p>
          )}
          {job.requirements && (
            <>
              <h2 className="mt-8 text-2xl font-bold">Yêu cầu</h2>
              <p className="mt-3 max-w-3xl whitespace-pre-line leading-8 text-slate-700">
                {job.requirements}
              </p>
            </>
          )}
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold">Ứng tuyển vị trí</h2>
          <p className="mt-3 text-slate-600">
            CV private storage chưa được triển khai; vui lòng điền thông tin và
            thư giới thiệu ngắn.
          </p>
          {submitted ? (
            <p
              role="status"
              className="mt-6 rounded-xl bg-green-50 p-4 text-green-800"
            >
              Hồ sơ đã được ghi nhận. Đội ngũ sẽ liên hệ khi phù hợp.
            </p>
          ) : (
            <div className="mt-7">
              <PublicSubmissionForm
                action={submitJob.bind(null, slug)}
                kind="job"
                label="Gửi hồ sơ"
              />
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
