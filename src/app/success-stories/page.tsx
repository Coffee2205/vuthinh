import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { createPageMetadata } from "@/lib/seo";
import { getPublishedSuccessStories } from "@/services/support.service";
import { shouldBypassImageOptimization } from "@/lib/supabase/storage";

export const metadata: Metadata = createPageMetadata({
  title: "Thành quả học viên",
  description: "Những câu chuyện học tập đã được đồng ý công bố tại Vũ Thịnh.",
  path: "/success-stories",
});
export const dynamic = "force-dynamic";

export default async function Page() {
  const stories = await getPublishedSuccessStories();
  return (
    <main>
      <section className="bg-blue-50 py-16">
        <Container>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Thành quả học viên
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Chỉ hiển thị câu chuyện đã xuất bản và được xác nhận đồng ý công bố.
          </p>
        </Container>
      </section>
      <section className="py-14">
        <Container>
          {stories.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  {story.image_url ? (
                    <div className="relative aspect-video bg-slate-100">
                      <Image
                        src={story.image_url}
                        alt={`Ảnh câu chuyện ${story.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        unoptimized={shouldBypassImageOptimization(
                          story.image_url,
                        )}
                      />
                    </div>
                  ) : (
                    <div className="grid aspect-video place-items-center bg-gradient-to-br from-blue-50 to-emerald-50 text-sm font-bold uppercase tracking-wider text-brand-blue">
                      Vũ Thịnh · Câu chuyện học tập
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-950">
                      {story.title}
                    </h2>
                    {(story.description || story.content) && (
                      <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
                        {story.description || story.content}
                      </p>
                    )}
                    {story.quote && (
                      <blockquote className="mt-5 border-l-4 border-brand-green pl-4 italic text-slate-700">
                        {story.quote}
                      </blockquote>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold">
                Câu chuyện đang được cập nhật
              </h2>
              <p className="mt-3 text-slate-600">
                Chưa có thành quả đã xác nhận quyền công bố.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
