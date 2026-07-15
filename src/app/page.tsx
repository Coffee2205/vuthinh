import { Container } from "@/components/common/Container";

export default function Home() {
  return (
    <section className="flex flex-1 items-center bg-brand-blue-soft py-20">
      <Container><div className="max-w-2xl"><p className="font-semibold text-brand-blue">Nền tảng đã sẵn sàng</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Hệ sinh thái giáo dục gia đình Vũ Thịnh</h1><p className="mt-5 text-lg leading-8 text-slate-600">Nuôi dưỡng trí tuệ – ngôn ngữ – nhân cách.</p></div></Container>
    </section>
  );
}
