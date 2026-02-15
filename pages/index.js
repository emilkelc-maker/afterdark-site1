import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "black", color: "white", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "40px", position: "relative" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #020617, black, black)",
          opacity: 0.9
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: "relative", zIndex: 10 }}
        >
          <h1 style={{ fontSize: "64px", letterSpacing: "0.25em", fontWeight: 300 }}>
            AFTERDARK
          </h1>
          <p style={{ marginTop: "24px", fontSize: "20px", color: "#9ca3af", letterSpacing: "0.2em" }}>
            BUILT AFTER DARK.
          </p>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: "24px", color: "#d1d5db", lineHeight: 1.6 }}
        >
          AFTERDARK is engineered for those who train, recover, and perform
          when the world slows down. Precision formulations. Premium
          ingredients. A new standard in night-time performance nutrition.
        </motion.p>
      </section>

      {/* Product Pillars */}
      <section style={{ padding: "0 24px 128px" }}>
        <div style={{
          display: "grid",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}>
          {[
            "Whey Protein Concentrate",
            "Whey Protein Isolate",
            "Casein Custard",
          ].map((product) => (
            <div
              key={product}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "40px",
                textAlign: "center"
              }}
            >
              <h3 style={{ fontSize: "20px" }}>{product}</h3>
              <p style={{ marginTop: "16px", color: "#9ca3af", fontSize: "14px" }}>
                Premium performance formulation designed for recovery,
                strength, and night-time optimisation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", color: "#6b7280", fontSize: "14px", paddingBottom: "40px" }}>
        © {new Date().getFullYear()} AFTERDARK. All rights reserved.
      </footer>
    </main>
  );
}
