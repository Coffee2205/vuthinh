import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/common/Container";
import { PublicSubmissionForm } from "@/components/forms/PublicSubmissionForm";
import { submitContact } from "@/app/support-actions";
import { getPublicSiteSettings } from "@/services/support.service";
export const metadata: Metadata = createPageMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ Vũ Thịnh để được hỗ trợ về chương trình học, đăng ký học thử và tư vấn.",
  path: "/contact",
});
export const dynamic = "force-dynamic";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;
  const settings = await getPublicSiteSettings();
  const contact = settings.contact;
  return (
    <main>
      <section className="bg-blue-50 py-16">
        <Container>
          <h1 className="text-4xl font-bold sm:text-5xl">Liên hệ</h1>
          <p className="mt-5 text-lg text-slate-600">
            Gửi câu hỏi để đội ngũ Vũ Thịnh ghi nhận và phản hồi.
          </p>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
              <dl className="mt-5 space-y-4 text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Điện thoại</dt>
                  <dd>{String(contact.phone || "0773786195")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Email</dt>
                  <dd>{String(contact.email || "bpt8998@gmail.com")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Địa chỉ</dt>
                  <dd>
                    {String(
                      contact.address ||
                        "Đường Cầu vồng, Vinhomes Grand Park city Thủ Đức",
                    )}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              {submitted ? (
                <p
                  role="status"
                  className="rounded-xl bg-green-50 p-5 text-green-800"
                >
                  Tin nhắn đã được ghi nhận.
                </p>
              ) : (
                <PublicSubmissionForm
                  action={submitContact}
                  kind="contact"
                  label="Gửi liên hệ"
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
