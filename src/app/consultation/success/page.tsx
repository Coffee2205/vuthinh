import Link from "next/link";
import { Container } from "@/components/common/Container";
export const metadata = {
  title: "Đã ghi nhận yêu cầu tư vấn",
  robots: { index: false, follow: false },
};
export default function ConsultationSuccessPage() {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <span
            className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700"
            aria-hidden="true"
          >
            ✓
          </span>
          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Yêu cầu đã được ghi nhận
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Trung tâm sẽ liên hệ để trao đổi và xác nhận thông tin tư vấn với
            giảng viên. Việc gửi yêu cầu chưa phải là lịch hẹn đã được xác nhận.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/expert" className="button-primary">
              Xem lại giảng viên
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue px-5 py-2 font-semibold text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Xem khóa học
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
