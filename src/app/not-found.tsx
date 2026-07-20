import Link from "next/link";
import { Container } from "@/components/common/Container";

export default function NotFound() {
  return (
    <main className="grid flex-1 place-items-center bg-slate-50 py-20 sm:py-28">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">Lỗi 404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Không tìm thấy trang
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Địa chỉ có thể đã thay đổi hoặc nội dung chưa được công bố.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary px-6">Về trang chủ</Link>
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue bg-white px-6 py-2 font-semibold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Xem khóa học
          </Link>
        </div>
      </Container>
    </main>
  );
}
