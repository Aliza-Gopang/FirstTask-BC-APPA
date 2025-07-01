'use client';

import { motion } from "framer-motion";

export default function JoinButton() {
  return (
    <motion.button
      className="btn btn-join-now px-3 py-2 rounded-pill me-lg-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      Join Now <span className="ms-2">→</span>
    </motion.button>
  );
}
