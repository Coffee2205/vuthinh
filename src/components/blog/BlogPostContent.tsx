import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export function BlogPostContent({ content }: { content: string }) {
  return (
    <div className="mx-auto max-w-[780px] text-[1.05rem] leading-8 text-slate-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mb-4 mt-12 text-2xl font-bold text-slate-950 sm:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-xl font-bold text-slate-900">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="my-5">{children}</p>,
          ul: ({ children }) => (
            <ul className="my-5 list-disc space-y-2 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-5 list-decimal space-y-2 pl-6">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-brand-green bg-green-50 px-5 py-2 italic">
              {children}
            </blockquote>
          ),
          a: ({ href = "", children }) =>
            href.startsWith("/") ? (
              <Link
                className="font-semibold text-brand-blue underline underline-offset-4"
                href={href}
              >
                {children}
              </Link>
            ) : (
              <a
                className="font-semibold text-brand-blue underline underline-offset-4"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
                <span className="sr-only"> (mở trong tab mới)</span>
              </a>
            ),
          code: ({ children }) => (
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-900">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
