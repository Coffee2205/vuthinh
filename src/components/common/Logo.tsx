import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue" aria-label="Vũ Thịnh - Trang chủ">
      <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-brand-blue text-lg text-white">VT</span>
      <span className="text-xl">Vũ Thịnh</span>
    </Link>
  );
}
