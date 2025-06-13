"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import DropwDownButton from "./common/DropdownButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`flex p-4 justify-end ${styles.container}`}>
      <div
        className={`flex justify-between items-center gap-8 py-2 ps-20 pe-2 rounded-2xl ${styles.navbarContent}`}
      >
        <a href="/" className="logo-part flex items-center">
          <Image
            src="/logo-with-text.png"
            alt="Simbian AI Logo"
            width={120}
            height={120}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </a>

        <div className="navlinks flex gap-2">
          <a href="/">
            <DropwDownButton text="Products" />
          </a>
          <a href="/">
            <DropwDownButton text="Company" />
          </a>
          <a href="/">
            <DropwDownButton text="Resources" />
          </a>
          <a href="/">
            <span>Blog</span>
          </a>
        </div>

        <motion.div
          className="flex items-center gap-2 py-4 px-10 rounded-xl"
          initial={{ backgroundColor: "rgb(18,16,18)" }}
          animate={{ backgroundColor: "#ffffff" }}
          transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
          style={{
            fontWeight: "bold",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
            filter: "url(#flt_tag)",
          }}
        >
          <motion.span
            initial={{ color: "white" }}
            animate={{ color: "black" }}
            transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
          >
            Book a demo
          </motion.span>
          <Image
            src="/logo-white.png"
            alt="Simbian AI Logo"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </motion.div>

        <svg className={styles.flt_svg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>

      <svg className={styles.flt_svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="flt_tag"
            />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Navbar;
