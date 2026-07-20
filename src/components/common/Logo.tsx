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
      className="inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
      aria-label="Vũ Thịnh - Trang chủ"
    >
      <Image
        src={
          isWordmark
            ? "/images/brand/vu-thinh-wordmark-transparent.png"
            : "/images/brand/vu-thinh-mark-transparent.png"
        }
        alt=""
        width={isWordmark ? 112 : 44}
        height={isWordmark ? 112 : 44}
        className={isWordmark ? "size-28 object-contain" : "size-11 object-contain"}
        priority={!isWordmark}
      />
      {!isWordmark && <span className="text-xl">Vũ Thịnh</span>}
    </Link>
  );
}
