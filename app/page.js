
"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px" }}>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ fontSize: "64px", letterSpacing: "0.25em" }}
        >
          AFTERDARK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{ marginTop: "24px", fontSize: "20px", color: "#cccccc" }}
        >
          BUILT AFTER DARK.
        </motion.p>
      </div>
    </main>
  );
}
