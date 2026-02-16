import Link from "next/link";

export default function SkincarePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.25em] font-light">
          SKINCARE
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Recovery extends beyond training. Precision skincare engineered for
          overnight repair, hydration, and restoration after dark.
        </p>
      </section>

      {/* Featured Product */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="aspect-square bg-white/5 rounded-2xl" />

        <div>
          <h2 className="text-3xl mb-4">Night Recovery Face Serum</h2>
          <p className="text-gray-400 mb-6">
            Designed to support skin renewal, hydration, and barrier repair
            during the body’s natural overnight recovery cycle.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Supporting Content */}
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-gray-500 leading-relaxed">
          AFTERDARK Skincare is developed to complement the performance
          lifestyle — aligning physical recovery with visible restoration. Each
          formulation is created with restraint, purity, and purpose.
        </p>
      </section>
    </div>
  );
}
