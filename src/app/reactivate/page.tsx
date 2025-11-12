export default function ReactivatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#22c55e33,_transparent_60%),radial-gradient(circle_at_bottom,_#0ea5e933,_transparent_55%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40">
              <span className="text-lg font-semibold text-emerald-400">A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight">
                AxisAI
              </span>
              <span className="text-xs text-slate-400">
                Voice & Text Agents
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-emerald-400">
              Home
            </a>
            <a href="/#product" className="hover:text-emerald-400">
              Product
            </a>
            <a href="/#pricing" className="hover:text-emerald-400">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-xl bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-16 pt-10 md:pb-24 md:pt-16">
        {/* REACTIVATE SECTION */}
        <section className="mx-auto max-w-lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-3 py-1 text-xs text-emerald-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Account Reactivation
            </div>

            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Welcome back to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                AxisAI
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Reactivate your account to continue using AI voice and text agents
              for your business. Get back to answering calls and qualifying leads
              24/7.
            </p>
          </div>

          {/* REACTIVATE FORM */}
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="account-id"
                  className="block text-sm font-medium text-slate-200"
                >
                  Account ID (Optional)
                </label>
                <input
                  type="text"
                  id="account-id"
                  name="account-id"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Enter your account ID if you have it"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                Reactivate Account
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-6">
              <p className="text-center text-xs text-slate-400">
                Need help?{" "}
                <a
                  href="mailto:support@axisai.io"
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-5 w-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-200">
                Instant Access
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Your settings and data are preserved
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-5 w-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-200">
                24/7 Support
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                We're here to help you get back up
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-5 w-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-200">
                No Setup Time
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Start using agents immediately
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

