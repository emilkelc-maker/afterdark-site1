import Link from "next/link";

export default function ProteinPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.25em] font-light">
          PROTEIN
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Premium recovery formulations engineered for strength, repair, and
          performance after dark.
        </p>
      </section>

      {/* Featured Product */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="aspect-square bg-white/5 rounded-2xl" />

        <div>
          <h2 className="text-3xl mb-4">Whey Protein Concentrate</h2>
          <p className="text-gray-400 mb-6">
            Smooth texture, refined flavour, and precise recovery support for
            serious training.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          "Performance Whey",
          "Coffee & Tea Whey",
          "Whey Isolate",
          "Protein Custard",
        ].map((item) => (
          <div
            key={item}
            className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
          >
            <div className="aspect-square bg-white/5 rounded-xl mb-6" />
            <h3 className="text-xl mb-2">{item}</h3>
            <p className="text-gray-500 text-sm mb-4">
              Explore the AFTERDARK {item.toLowerCase()} range.
            </p>
            <Link
              href="/"
              className="text-sm tracking-widest hover:text-gray-300"
            >
              VIEW
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
