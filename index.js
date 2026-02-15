import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-black to-black opacity-90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl tracking-[0.25em] font-light">
            AFTERDARK
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 tracking-[0.2em]">
            BUILT AFTER DARK.
          </p>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed"
        >
          AFTERDARK is engineered for those who train, recover, and perform
          when the world slows down. Precision formulations. Premium
          ingredients. A new standard in night-time performance nutrition.
        </motion.p>
      </section>

      {/* Product Pillars */}
      <section className="px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Whey Protein Concentrate",
            "Whey Protein Isolate",
            "Casein Custard",
          ].map((product, i) => (
            <motion.div
              key={product}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center hover:bg-white/10 transition"
            >
              <h3 className="text-xl tracking-wide">{product}</h3>
              <p className="mt-4 text-gray-400 text-sm">
                Premium performance formulation designed for recovery,
                strength, and night-time optimisation.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="border-t border-white/10 py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl tracking-wide">Early Access</h2>
          <p className="mt-4 text-gray-400">
            Join the AFTERDARK list for launch access, product drops, and
            exclusive releases.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Join
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pb-10">
        © {new Date().getFullYear()} AFTERDARK. All rights reserved.
      </footer>
    </main>
  );
}
