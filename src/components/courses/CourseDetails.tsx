import { Container } from "@/components/common/Container";
import type { Course } from "@/types/course";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="scroll-mt-24 border-b border-slate-200 py-10 last:border-0"
    >
      <h2 id={id} className="text-2xl font-bold text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 leading-8 text-slate-600">{children}</div>
    </section>
  );
}
export function CourseDetails({ course }: { course: Course }) {
  return (
    <div className="bg-white py-6 sm:py-10">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Section id="course-description" title="Mô tả khóa học">
            <p>{course.description}</p>
          </Section>
          <Section id="course-audience" title="Khóa học dành cho ai">
            <ul className="grid gap-3">
              {course.audiences.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <span
                    className="mt-3 size-2 shrink-0 rounded-full bg-brand-green"
                    aria-hidden="true"
                  />
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section id="course-duration" title="Thời lượng và hình thức học">
            <p>
              {course.sessionCount} buổi
              {course.sessionDurationMinutes
                ? `, mỗi buổi ${course.sessionDurationMinutes} phút`
                : ""}
              .{" "}
              {course.durationText
                ? `Thời lượng dự kiến: ${course.durationText}. `
                : ""}
              Hình thức học có thể được tư vấn theo thông tin đang công bố của
              khóa.
            </p>
          </Section>
          <Section id="course-fee" title="Học phí">
            <p>
              Học phí hiển thị ở phần tóm tắt đầu trang. Vui lòng đăng ký tư vấn
              để xác nhận lịch học, chính sách và mức phí áp dụng tại thời điểm
              đăng ký.
            </p>
          </Section>
          <Section id="course-roadmap" title="Lộ trình học">
            <ol className="grid gap-5">
              {course.roadmapStages.map((stage, index) => (
                <li
                  key={stage.id}
                  className="relative rounded-2xl border border-slate-200 p-5 sm:p-6"
                >
                  <span className="text-sm font-extrabold uppercase tracking-wider text-brand-blue">
                    Giai đoạn {index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {stage.title}
                  </h3>
                  {stage.description && (
                    <p className="mt-2">{stage.description}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    {stage.sessionCount && (
                      <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-brand-blue">
                        {stage.sessionCount} buổi
                      </span>
                    )}
                    {stage.objective && (
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">
                        Mục tiêu: {stage.objective}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
          <Section id="course-curriculum" title="Giáo trình">
            <ol className="grid gap-4 sm:grid-cols-2">
              {course.curriculumItems.map((item, index) => (
                <li key={item.id} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Mục {index + 1}
                    {item.materialType ? ` · ${item.materialType}` : ""}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2">{item.description}</p>
                  )}
                  {item.note && (
                    <p className="mt-2 text-sm italic text-slate-500">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
            {course.textbookSummary && (
              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                {course.textbookSummary}
              </p>
            )}
          </Section>
          {course.outcomes.length > 0 && (
            <Section id="course-outcomes" title="Kết quả kỳ vọng">
              <ul className="grid gap-3">
                {course.outcomes.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <span
                      className="mt-3 size-2 shrink-0 rounded-full bg-brand-blue"
                      aria-hidden="true"
                    />
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
              {course.expectedOutcomesSummary && (
                <p className="mt-5 text-sm italic text-slate-500">
                  {course.expectedOutcomesSummary}
                </p>
              )}
            </Section>
          )}
        </div>
      </Container>
    </div>
  );
}
