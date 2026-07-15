import { Container } from "@/components/common/Container";
import { trialRegistrationContent } from "@/data/home";

const fieldClassName =
  "mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-500 disabled:cursor-not-allowed";

export function TrialRegistrationSection() {
  return (
    <section
      id="trial-registration"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="trial-registration-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
              {trialRegistrationContent.eyebrow}
            </p>
            <h2
              id="trial-registration-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
            >
              {trialRegistrationContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {trialRegistrationContent.description}
            </p>
            <div
              id="trial-form-status"
              className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"
              role="status"
            >
              <p className="font-bold">{trialRegistrationContent.status}</p>
              <p className="mt-1">{trialRegistrationContent.note}</p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
            aria-describedby="trial-form-status"
          >
            <fieldset disabled>
              <legend className="text-xl font-bold text-slate-950">
                {trialRegistrationContent.formTitle}
              </legend>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-800">
                  Họ và tên
                  <input className={fieldClassName} name="fullName" autoComplete="name" />
                </label>
                <label className="text-sm font-semibold text-slate-800">
                  Số điện thoại
                  <input className={fieldClassName} name="phone" type="tel" autoComplete="tel" />
                </label>
                <label className="text-sm font-semibold text-slate-800">
                  Email
                  <input className={fieldClassName} name="email" type="email" autoComplete="email" />
                </label>
                <label className="text-sm font-semibold text-slate-800">
                  Độ tuổi học viên
                  <input className={fieldClassName} name="studentAge" inputMode="numeric" />
                </label>
                <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
                  Chương trình quan tâm
                  <select className={fieldClassName} name="interestedProgram" defaultValue="">
                    <option value="">Chọn chương trình</option>
                    {trialRegistrationContent.programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-semibold text-slate-800 sm:col-span-2">
                  Ghi chú
                  <textarea className={fieldClassName} name="note" rows={4} />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 min-h-11 w-full rounded-xl bg-slate-300 px-6 py-3 font-semibold text-slate-600 disabled:cursor-not-allowed"
              >
                {trialRegistrationContent.submitLabel}
              </button>
            </fieldset>
          </form>
        </div>
      </Container>
    </section>
  );
}
