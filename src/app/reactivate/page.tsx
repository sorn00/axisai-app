import PricingSelector from "@/components/PricingSelector";

export default function ReactivatePage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-16 pt-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#22c55e22,_transparent_60%),radial-gradient(circle_at_bottom,_#06b6d422,_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
            Reactivation Pricing
          </h1>
          <p className="mt-2 text-slate-300">
            Pick the model that fits your cash flow—pay per booked appointment or scale by contact batches.
          </p>
        </header>

        <PricingSelector />
      </div>
    </main>
  );
}