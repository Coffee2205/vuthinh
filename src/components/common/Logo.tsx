import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "compact" | "wordmark";
};

export function Logo({ variant = "compact" }: LogoProps) {
  const isWordmark = variant === "wordmark";

  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 items-center rounded-lg font-bold text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue ${isWordmark ? "gap-3" : "gap-2"}`}
      aria-label="Vũ Thịnh - Trang chủ"
    >
      <Image
        src="/images/brand/vu-thinh-logo-color.png"
        alt=""
        width={492}
        height={623}
        sizes={isWordmark ? "112px" : "56px"}
        className={isWordmark ? "size-28 shrink-0 rounded-full object-cover object-center" : "size-14 shrink-0 rounded-full object-cover object-center"}
        priority={!isWordmark}
        unoptimized
      />
      <span className={isWordmark ? "text-2xl" : "text-xl"}>Vũ Thịnh</span>
    </Link>
  );
}
