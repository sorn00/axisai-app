// AxisAI.io – Landing Page
// If using Next.js App Router, save as app/page.tsx
// If using CRA/Vite, save as src/App.jsx and export default App

export default function AxisAIHome() {
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
            <a href="#product" className="hover:text-emerald-400">
              Product
            </a>
            <a href="#solutions" className="hover:text-emerald-400">
              Solutions
            </a>
            <a href="#pricing" className="hover:text-emerald-400">
              Pricing
            </a>
            <a href="#faq" className="hover:text-emerald-400">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-slate-600 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-400 hover:text-white md:inline-flex">
              Sign in
            </button>
            <a
              href="#demo"
              className="rounded-xl bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-16">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-3 py-1 text-xs text-emerald-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI Voice & Text Agents for Modern Businesses
            </div>

            <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Never miss a lead again with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                AxisAI Voice & Text Agents
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              AxisAI connects AI voice agents and conversational text agents to
              your phone lines, CRM, and website. We answer calls, reply to
              texts, qualify leads, and book appointments&nbsp;— 24/7, on autopilot.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
              >
                Book a Live Demo
              </a>
              <a
                href="#product"
                className="text-sm font-medium text-slate-200 hover:text-emerald-300"
              >
                Watch a sample call →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Under 2 weeks to launch</span>
              </div>
              <div className="h-3 w-px bg-slate-700" />
              <div>Works with your existing phone & CRM stack</div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/60">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-200">Live Call Flow</span>
              <span>AI Voice Agent</span>
            </div>

            <div className="space-y-3 text-xs">
              <CallStep
                label="Incoming Call"
                side="left"
                title="New lead calls your number"
                body="AxisAI instantly picks up with your branded greeting — no missed calls, no voicemail."
              />
              <CallStep
                label="Qualification"
                side="right"
                title="Agent asks smart questions"
                body="Collects name, project details, budget, and timeline using natural conversation."
              />
              <CallStep
                label="Routing"
                side="left"
                title="Routes to the right person"
                body="Hot leads are transferred live or turned into appointments on your calendar."
              />
              <CallStep
                label="Follow-Up"
                side="right"
                title="Instant SMS follow-up"
                body="AxisAI Text Agent fires off a recap, links, and confirmation via SMS or WhatsApp."
              />
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950/80 p-4 text-xs">
              <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Use Case Snapshot</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                  Popular
                </span>
              </div>
              <p className="font-medium text-slate-100">
                Missed-call → instant text-back
              </p>
              <p className="mt-1 text-slate-300">
                If your team can&apos;t answer, AxisAI texts the caller within
                seconds, keeps the conversation going, qualifies them, and books
                a time — before they dial your competitor.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT OVERVIEW */}
        <section id="product" className="mt-16 border-t border-slate-800 pt-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                One platform. Two powerful agents.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                AxisAI unifies voice and text so every conversation — calls, SMS,
                and web chat — is handled by a single intelligent agent that
                knows your business.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Built for agencies, service providers, and growth-focused teams.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Voice Agent */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-300">
                  AxisAI Voice Agent
                </span>
              </div>
              <h3 className="text-lg font-semibold">AI Voice Agent</h3>
              <p className="text-sm text-slate-300">
                Answer every phone call with a natural-sounding AI receptionist
                that understands intent, asks smart questions, and acts on your
                playbook.
              </p>

              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Answers and handles calls 24/7</li>
                <li>• Qualifies, routes, and books appointments</li>
                <li>• Reads from your knowledge base & FAQs</li>
                <li>• Transfers hot leads to your team in real time</li>
              </ul>

              <div className="mt-3 rounded-xl bg-slate-950/70 p-3 text-xs text-slate-300">
                <span className="font-semibold text-emerald-300">
                  Ideal for:
                </span>{" "}
                busy local businesses, agencies, trades, med spas, legal, and
                home services.
              </div>
            </div>

            {/* Text Agent */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-semibold text-cyan-300">
                  AxisAI Text Agent
                </span>
              </div>
              <h3 className="text-lg font-semibold">AI Text Agent</h3>
              <p className="text-sm text-slate-300">
                Turn every phone number, form submission, or QR code into a
                two-way AI conversation that nurtures, qualifies, and converts.
              </p>

              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Missed-call text-back & lead rescue</li>
                <li>• Automated follow-up & reactivation campaigns</li>
                <li>• Web chat, SMS, and WhatsApp messaging</li>
                <li>• Syncs conversations into your CRM or pipeline</li>
              </ul>

              <div className="mt-3 rounded-xl bg-slate-950/70 p-3 text-xs text-slate-300">
                <span className="font-semibold text-cyan-300">
                  Ideal for:
                </span>{" "}
                agencies needing scalable follow-up, sales teams, and any
                business where leads slip through the cracks.
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS / USE CASES */}
        <section id="solutions" className="mt-16 border-t border-slate-800 pt-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Built for real-world revenue workflows.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                AxisAI plugs into the way you already work — calls, calendars,
                and CRM — and automates the parts that your team doesn&apos;t
                have time for.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Missed-call capture",
                body: "Turn every missed call into an SMS conversation within seconds.",
              },
              {
                title: "Lead qualification",
                body: "Ask the right questions, score leads, and push only serious buyers to your team.",
              },
              {
                title: "Appointment booking",
                body: "Sync with your calendar and let AxisAI book and confirm appointments 24/7.",
              },
              {
                title: "Customer support",
                body: "Handle FAQs, policies, and basic support to free up your human team.",
              },
              {
                title: "Reactivation campaigns",
                body: "Revive cold leads and past customers with smart, human-like outreach.",
              },
              {
                title: "Agency white-label",
                body: "Sell AI agents under your brand as a monthly recurring add-on.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300">{card.body}</p>
                </div>
                <div className="mt-4 text-[11px] text-emerald-300">
                  · Voice + Text ready
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-16 border-t border-slate-800 pt-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Simple pricing, built to scale with you.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Start with one number, one agent — grow into full AI coverage
              across voice and text.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <PricingCard
              name="Starter"
              tag="Best for solo & small teams"
              price="$X / month"
              bullets={[
                "1 AI Voice Agent number",
                "Basic AI Text Agent",
                "Missed-call text-back",
                "Up to X calls / month",
              ]}
            />
            {/* Growth */}
            <PricingCard
              name="Growth"
              tag="Most popular"
              highlight
              price="$Y / month"
              bullets={[
                "Multiple AI Voice Agent numbers",
                "Full AI Text Agent (SMS & web chat)",
                "CRM & calendar integration",
                "Priority support & onboarding",
              ]}
            />
            {/* Scale */}
            <PricingCard
              name="Scale"
              tag="For agencies & multi-location"
              price="Talk to us"
              bullets={[
                "White-label & custom branding",
                "Custom integrations & workflows",
                "High-volume pricing",
                "Dedicated success manager",
              ]}
            />
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Usage-based minutes and SMS fees may apply depending on carrier and
            region.
          </p>
        </section>

        {/* DEMO / CONTACT */}
        <section
          id="demo"
          className="mt-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-cyan-500/10 px-6 py-8 md:px-10"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                See AxisAI in action.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-100">
                Share a bit about your business and we&apos;ll show you a
                tailored demo of both our Voice and Text Agents — using your
                real-world scenarios.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>• Live call + SMS flow walkthrough</li>
                <li>• Integration mapping with your tools</li>
                <li>• Implementation timeline & ROI breakdown</li>
              </ul>
            </div>

            {/* Simple form shell – wire up to GHL, HubSpot, etc. */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-xs">
              <form className="space-y-3">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-50 outline-none ring-emerald-500/40 focus:ring"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    Business / Agency
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-50 outline-none ring-emerald-500/40 focus:ring"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-50 outline-none ring-emerald-500/40 focus:ring"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-300">
                    What do you want AxisAI to handle?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-50 outline-none ring-emerald-500/40 focus:ring"
                    placeholder="E.g. missed call capture for our painting leads, SMS follow-up for med spa consults, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
                >
                  Request Demo
                </button>
                <p className="mt-2 text-[10px] leading-snug text-slate-400">
                  By submitting, you agree to be contacted by AxisAI via email,
                  phone, and SMS. Message & data rates may apply.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-16 border-t border-slate-800 pt-12">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "How long does it take to launch?",
                a: "Most clients go live within 7–14 days depending on integrations and call routing complexity.",
              },
              {
                q: "Can AxisAI work with my existing phone system?",
                a: "Yes. We can provision new numbers or integrate with your existing call flow and forwarding setup.",
              },
              {
                q: "What CRMs do you integrate with?",
                a: "We connect with most modern CRMs and marketing platforms. During onboarding we map AxisAI actions to your specific tools.",
              },
              {
                q: "Is this white-label friendly for agencies?",
                a: "Absolutely. Our Scale plan is built for agencies that want to resell AI agents under their own brand.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm"
              >
                <p className="font-semibold text-slate-50">{item.q}</p>
                <p className="mt-2 text-slate-300 text-xs sm:text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-slate-300">AxisAI.io</span>
            <span className="text-slate-600">•</span>
            <span>AI Voice & Text Agents</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#demo" className="hover:text-emerald-300">
              Book a demo
            </a>
            <a href="#" className="hover:text-emerald-300">
              Privacy
            </a>
            <a href="#" className="hover:text-emerald-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper components */

function PricingCard({
  name,
  tag,
  price,
  bullets,
  highlight,
}: {
  name: string;
  tag: string;
  price: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col rounded-2xl border bg-slate-900/80 p-5 " +
        (highlight
          ? "border-emerald-500/70 shadow-lg shadow-emerald-500/25"
          : "border-slate-800")
      }
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-50">{name}</p>
          <p className="text-[11px] text-slate-400">{tag}</p>
        </div>
        {highlight && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
            Most popular
          </span>
        )}
      </div>
      <p className="text-lg font-semibold text-slate-50">{price}</p>
      <ul className="mt-3 space-y-2 text-xs text-slate-300">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <button className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-200">
        Talk to sales
      </button>
    </div>
  );
}

function CallStep({
  label,
  title,
  body,
  side,
}: {
  label: string;
  title: string;
  body: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  return (
    <div
      className={
        "flex gap-2 " + (isLeft ? "justify-start" : "justify-end text-right")
      }
    >
      <div
        className={
          "max-w-xs rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2.5"
        }
      >
        <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
          <span>{label}</span>
          <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[9px]">
            {isLeft ? "Caller" : "AxisAI Agent"}
          </span>
        </div>
        <p className="text-xs font-semibold text-slate-100">{title}</p>
        <p className="mt-1 text-[11px] text-slate-300">{body}</p>
      </div>
    </div>
  );
}