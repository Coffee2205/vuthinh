import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/common/Container";
export const metadata: Metadata = createPageMetadata({
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản áp dụng khi truy cập thông tin và gửi yêu cầu qua website Vũ Thịnh.",
  path: "/terms",
});
export default function Page() {
  return (
    <main>
      <section className="py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-bold">Điều khoản sử dụng</h1>
          <p className="mt-6 rounded-xl bg-amber-50 p-4 text-amber-900">
            Điều khoản chính thức đang chờ chủ sở hữu và tư vấn pháp lý rà soát,
            phê duyệt.
          </p>
          <h2 className="mt-10 text-2xl font-bold">Phạm vi thông tin</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Website cung cấp thông tin về chương trình, nội dung giáo dục và
            kênh gửi yêu cầu. Việc gửi biểu mẫu không tự động xác nhận lịch, lớp
            học hoặc tuyển dụng.
          </p>
          <h2 className="mt-8 text-2xl font-bold">Nội dung và liên kết</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Người dùng cần kiểm tra thông tin được xác nhận trực tiếp trước khi
            đưa ra quyết định. Bản này là nội dung tạm thời, không phải cam kết
            pháp lý cuối cùng.
          </p>
        </Container>
      </section>
    </main>
  );
}
