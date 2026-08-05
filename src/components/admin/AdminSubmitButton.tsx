"use client";

import { useFormStatus } from "react-dom";

export function AdminSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="button-primary disabled:cursor-wait disabled:opacity-65"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Đang lưu và tải ảnh…" : "Lưu"}
    </button>
  );
}
