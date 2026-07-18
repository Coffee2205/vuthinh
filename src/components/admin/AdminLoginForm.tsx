"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/admin/login/actions";

function Submit() { const { pending } = useFormStatus(); return <button className="button-primary w-full" disabled={pending}>{pending ? "Đang đăng nhập…" : "Đăng nhập"}</button>; }
export function AdminLoginForm() {
  const [state, action] = useActionState<LoginState, FormData>(loginAction, {});
  return <form action={action} className="mt-8 space-y-5" noValidate>
    {state.message && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{state.message}</p>}
    <div><label htmlFor="email" className="text-sm font-semibold">Email</label><input id="email" name="email" type="email" autoComplete="username" className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 px-3" aria-invalid={Boolean(state.fieldErrors?.email)}/>{state.fieldErrors?.email?.[0] && <p className="mt-1 text-sm text-red-700">{state.fieldErrors.email[0]}</p>}</div>
    <div><label htmlFor="password" className="text-sm font-semibold">Mật khẩu</label><input id="password" name="password" type="password" autoComplete="current-password" className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 px-3" aria-invalid={Boolean(state.fieldErrors?.password)}/>{state.fieldErrors?.password?.[0] && <p className="mt-1 text-sm text-red-700">{state.fieldErrors.password[0]}</p>}</div>
    <Submit />
  </form>;
}
