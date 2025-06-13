import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LuCircleHelp } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const cardMessages = [
  {
    id: 1,
    title: "Waiting for Analyst",
    description: "Analyst is dealing with another problem. Hold on...",
    icon: "⏳",
  },
  {
    id: 2,
    title: "Writing Query",
    description: "Querying across many tools gets complex...",
    icon: "🛠️",
  },
];

const CardsLoadingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:py-14 mt-28 sm:py-10 sm:mt-10">
      <AnimatePresence mode="wait">
        <div className="relative">
          <motion.div
            key={cardMessages[currentIndex].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center bg-[rgb(40,45,69)] backdrop-blur-xs rounded-2xl p-5 gap-5 border border-[#2b3653] w-2xl">
              <div className="bg-white/15 p-2.5 rounded-md ">
                <LuCircleHelp className="text-3xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Asking ChatGpt</h3>
                <p className="text-[#878e9f]">
                  What does this PowerShell command even mean ?
                </p>
              </div>
              <div className="absolute w-[507px] left-[100%] top-[50%] translate-y-[-50%] -ms-3">
                <Image
                  src="/assets/blueArrow.png"
                  alt=""
                  width="200"
                  height="200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CardsLoadingSection;
