"use client";

import { motion } from "framer-motion";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <motion.div
      className="h-screen lg:overflow-hidden flex flex-col sm:overflow-auto"
      initial={{ backgroundColor: "rgb(14,23,49, 0.8)" }}
      animate={{ backgroundColor: "rgb(60,92,237, 0.8)" }}
      transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
    >
      <Navbar />
      <div className="flex flex-1">
        <HomePage />
      </div>
    </motion.div>
  );
}
