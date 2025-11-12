"use client";

import { useMemo, useState, useEffect } from "react";

type TierPhase = "founders" | "growth" | "premium";

export default function PricingSelector() {
  const [mode, setMode] = useState<"perAppointment" | "perBatch">("perAppointment");
  const [phase, setPhase] = useState<TierPhase>("founders"); // you can hydrate from CMS/DB
  const [spotsLeft, setSpotsLeft] = useState(17);            // live counter source goes here
  const [deadline, setDeadline] = useState<string>(() => {
    // Example: 48 hours from now; swap with a fixed ISO string for a synchronized deadline
    const d = new Date();
    d.setHours(d.getHours() + 48);
    return d.toISOString();
  });

  // Countdown
  const { d, h, m, s } = useCountdown(deadline);

  // Display helpers
  const phaseMeta = useMemo(() => {
    switch (phase) {
      case "founders":
        return { label: "Founders Wave", note: "First 25 free (200 contacts)", color: "from-emerald-500 to-cyan-400" };
      case "growth":
        return { label: "Growth Wave", note: "$197 Performance Tier", color: "from-yellow-400 to-amber-500" };
      default:
        return { label: "Premium Wave", note: "$497 setup + $297/mo", color: "from-fuchsia-500 to-violet-500" };
    }
  }, [phase]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
            Choose how you want to pay for results
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Pay only when AI books appointments, or scale by contact batches after your first 200 free.
          </p>
        </div>

        {/* Phase badge + countdown */}
        <div className="flex items-center gap-3">
          <div
            className={`rounded-xl bg-gradient-to-r ${phaseMeta.color} px-3 py-1 text-xs font-semibold text-slate-950`}
          >
            {phaseMeta.label}
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
            {phaseMeta.note}
          </div>
        </div>
      </div>

      {/* Scarcity row */}
      <div className="mb-6 grid gap-3 md:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-medium text-slate-200">Tier Progress</span>
            <span className="text-slate-400">
              Spots left: <span className="font-semibold text-emerald-300">{spotsLeft}</span>
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1">
            <PhasePill active={phase === "founders"} label="Founders (25)" />
            <PhasePill active={phase === "growth"} label="Growth (50)" />
            <PhasePill active={phase === "premium"} label="Premium" />
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            When current wave fills or the timer ends, pricing automatically advances to the next tier.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center">
          <p className="text-xs text-slate-300">Next price change in</p>
          <div className="mt-2 flex items-center justify-center gap-3 text-slate-100">
            <TimeBox value={d} unit="days" />
            <Colon />
            <TimeBox value={h} unit="hrs" />
            <Colon />
            <TimeBox value={m} unit="min" />
            <Colon />
            <TimeBox value={s} unit="sec" />
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="mb-6 flex w-full items-center justify-center">
        <div className="relative inline-flex rounded-2xl border border-slate-800 bg-slate-900/70 p-1">
          <button
            onClick={() => setMode("perAppointment")}
            className={`px-4 py-2 text-sm font-medium transition ${
              mode === "perAppointment"
                ? "rounded-xl bg-slate-950 text-emerald-300 ring-1 ring-emerald-400/40"
                : "text-slate-300 hover:text-slate-100"
            }`}
          >
            Pay per Appointment
          </button>
          <button
            onClick={() => setMode("perBatch")}
            className={`px-4 py-2 text-sm font-medium transition ${
              mode === "perBatch"
                ? "rounded-xl bg-slate-950 text-cyan-300 ring-1 ring-cyan-400/40"
                : "text-slate-300 hover:text-slate-100"
            }`}
          >
            Pay per Batch
          </button>
        </div>
      </div>

      {/* Pricing views */}
      {mode === "perAppointment" ? <PerAppointmentCards phase={phase} /> : <PerBatchCards phase={phase} />}

      {/* Footnotes */}
      <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-400">
        All options include: first 200 contacts free, AI Voice + Text Agent, booking integration, and performance report.
      </p>
    </section>
  );
}

/* ------------- Subcomponents ------------- */

function PerAppointmentCards({ phase }: { phase: TierPhase }) {
  // Adjust visible pricing copy by phase if desired
  const base = { trades: 75, premium: 115 };
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card
        highlight
        tag="Best for local services"
        title="Performance Reactivation"
        price={`$${base.trades}`}
        priceSuffix="/booked appointment"
        bullets={[
          "First 200 contacts free (proof batch)",
          "AI handles outreach + follow-up",
          "Booked call → pay per appointment",
          "No results? You don’t pay.",
        ]}
        ctaLabel="Start Free (200 Contacts)"
        ctaHref="#start-free"
        subText="Great for roofing, HVAC, home services, dental, fitness."
      />
      <Card
        tag="Higher ticket niches"
        title="Performance+"
        price={`$${base.premium}`}
        priceSuffix="/booked appointment"
        bullets={[
          "Priority AI dialing + callbacks",
          "Custom qualification script",
          "CRM pipeline updates",
          "Weekly performance billing",
        ]}
        ctaLabel="Activate Performance+"
        ctaHref="#activate"
        subText="Ideal for med spa, legal, real estate, B2B."
      />
    </div>
  );
}

function PerBatchCards({ phase }: { phase: TierPhase }) {
  // Phase-aware setup pricing example (optional)
  const setup =
    phase === "founders" ? "Free demo batch" : phase === "growth" ? "$197 one-time" : "$497 setup";
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        tag="Kickstart"
        title="Demo Batch"
        price="Free"
        priceSuffix="for first 200 contacts"
        bullets={[
          "Upload CSV or sync CRM",
          "AI Text + Voice follow-up",
          "2-week campaign window",
          "Performance report",
        ]}
        ctaLabel="Run My Free 200"
        ctaHref="#free-200"
        subText="Proves ROI before scaling your list."
      />
      <Card
        highlight
        tag="Most popular"
        title="Growth Batch"
        price="$297"
        priceSuffix="/per +1,000 contacts"
        bullets={[
          "Continued AI reactivation",
          "Appointment booking & routing",
          "Calendar + CRM sync",
          "Email + SMS notifications",
        ]}
        ctaLabel="Scale to 1,000+"
        ctaHref="#scale-1000"
        subText={`Current wave: ${setup}`}
      />
      <Card
        tag="For large databases"
        title="Pro Batch"
        price="$497"
        priceSuffix="/per +2,000 contacts"
        bullets={[
          "Higher throughput + retries",
          "Custom segments & throttling",
          "Multi-location support",
          "Dedicated success manager",
        ]}
        ctaLabel="Get a Quote"
        ctaHref="#quote"
        subText="Ask about agency white-label pricing."
      />
    </div>
  );
}

function Card(props: {
  highlight?: boolean;
  tag?: string;
  title: string;
  price: string;
  priceSuffix?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  subText?: string;
}) {
  const { highlight, tag, title, price, priceSuffix, bullets, ctaLabel, ctaHref, subText } = props;
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-slate-900/70 p-5 transition hover:shadow-xl ${
        highlight
          ? "border-emerald-500/60 shadow-emerald-500/20"
          : "border-slate-800 shadow-slate-950/20"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-50">{title}</p>
          {tag && <p className="text-[11px] text-slate-400">{tag}</p>}
        </div>
        {highlight && (
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            Recommended
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-semibold text-slate-50">{price}</p>
        {priceSuffix && <span className="text-sm text-slate-400">{priceSuffix}</span>}
      </div>

      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
          highlight
            ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            : "border border-slate-700 bg-slate-950/80 text-slate-100 hover:border-emerald-400 hover:text-emerald-200"
        }`}
      >
        {ctaLabel}
      </a>

      {subText && <p className="mt-3 text-[11px] text-slate-400">{subText}</p>}
    </div>
  );
}

function PhasePill({ active, label }: { active: boolean; label: string }) {
  return (
    <div
      className={`rounded-lg px-3 py-2 text-center text-[11px] ${
        active
          ? "bg-slate-950 text-emerald-300 ring-1 ring-emerald-400/40"
          : "bg-slate-800/60 text-slate-300"
      }`}
    >
      {label}
    </div>
  );
}

function TimeBox({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="min-w-[62px] rounded-xl border border-slate-700 bg-slate-900/70 px-2 py-1 text-center">
      <div className="text-lg font-semibold leading-none text-slate-50">{pad2(value)}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">{unit}</div>
    </div>
  );
}
function Colon() {
  return <div className="text-lg font-semibold text-slate-500">:</div>;
}

/* ------------- Hooks ------------- */
function useCountdown(targetISO: string) {
  const [t, setT] = useState<number>(() => Math.max(0, Date.parse(targetISO) - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setT(Math.max(0, Date.parse(targetISO) - Date.now())), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const total = Math.floor(t / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { d, h, m, s };
}

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}