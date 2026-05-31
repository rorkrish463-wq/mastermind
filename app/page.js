"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <div style={{
      height: "100vh",
      background: "#050816",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }}>

      <h1 style={{ color: "#00f5ff", letterSpacing: "6px" }}>
        MASTER MIND AI
      </h1>

      <motion.div
        animate={{ scale: active ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(0,245,255,0.1)",
          border: "2px solid #00f5ff",
          marginTop: 40,
          boxShadow: "0 0 40px #00f5ff"
        }}
      />

      <p style={{ marginTop: 20 }}>
        {active ? "Active..." : "Click Activate"}
      </p>

      <button
        onClick={() => setActive(!active)}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "#00f5ff",
          border: "none",
          borderRadius: 20
        }}
      >
        Activate AI
      </button>

    </div>
  );
}
