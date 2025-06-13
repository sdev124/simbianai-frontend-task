"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import CardsLoadingSection from "./CardsLoadingSection";
import CardsListSection from "./CardsListSection";
import StatCardsSection from "./StatCardsSection";
import styles from "./HomePage.module.css";

import CenteredArrowBand from "./CenteredArrowBand";
import { BiCheckCircle } from "react-icons/bi";
import CardsListWithDesc from "./CardsListWithDesc";

const HomePage = () => {
  return (
    <div className="flex flex-1 sm:flex-col md:flex-col lg:flex-row">
      <div className={`h-full w-[55%] sm:w-full md:w-full lg:w-[55%] ${styles.mainLeft}`}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
        >
          <CardsLoadingSection />
          <CardsListSection />
        </motion.div>
        <motion.div
          className={`${styles.stateCardsSection} pb-28  sm:pb-0 md:pb-28`}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-70vh", opacity: 1 }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl max-xs:bg-red-500 font-bold text-white font-poppins sm:text-2xl md:text-5xl ">
            With Simbian
          </h2>

          <p className="lg:text-2xl text-white pt-3 sm:text-xs sm:pb-5 ">
            Relax. Our Ai Agents will take it from here
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-10vw" }}
        transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
        className={styles.stateCardsSection}
      >
        <CenteredArrowBand />
      </motion.div>

      <div
        className={`flex flex-col justify-between pl-20 pt-10 pe-20 h-full w-[45%] pb-20 sm:w-full md:w-full lg:w-[45%] sm:pl-10 md:pl-20 `}
      >
        <motion.div
          className="text-end pb-28"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: "-50vh", opacity: 0 }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-[#3755ff] font-poppins">
            Without Simbian
          </h2>

          <p className="text-2xl text-[#3755ff] pt-3">
            If this sounds all too familiar, you might want to...
          </p>

          <button className="flex items-center ml-auto gap-2 px-6 py-4 rounded-full bg-white text-black text-xl font-semibold mt-5">
            <span>Book a Demo</span>
            <Image
              src="/logo-white.png"
              alt="Simbian AI Logo"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => (window.location.href = "/")}
            />
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 0, y: 30 }}
          animate={{ x: "-55vw" }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
          className={styles.stateCardsSection}
        >
          <StatCardsSection />
        </motion.div>

        <CardsListWithDesc />
      </div>
    </div>
  );
};

export default HomePage;
