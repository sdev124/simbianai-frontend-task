import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuBellOff, LuShieldAlert } from "react-icons/lu";
import { FaConnectdevelop, FaCubes } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./HomePage.module.css";

const iconsStack = [
  <BsGrid3X2GapFill />,
  <GiHummingbird />,
  <FaCubes />,
  <FaConnectdevelop />,
  <BsGrid3X2GapFill />,
  <GiHummingbird />,
  <FaCubes />,
  <FaConnectdevelop />,
];

const cardsData = [
  {
    id: 1,
    icon: <LuBellOff className="text-2xl" />,
    title: "Ignored Alerts",
    count: 193,
    icons: iconsStack,
  },
  {
    id: 2,
    icon: <IoCloseCircleOutline className="text-2xl" />,
    title: "Wrongly Closed",
    count: 193,
    icons: iconsStack,
  },
  {
    id: 3,
    icon: <LuShieldAlert className="text-2xl" />,
    title: "Active Threats",
    count: 3,
    icons: iconsStack.slice(2, 5),
    type: "activeThreats",
  },
];

const StatCardsSection = () => {
  return (
    <>
      {cardsData.map((card) => {
        return (
          <motion.div
            key={card.id}
            initial={{
              backgroundColor:
                card.type === "activeThreats" ? "#311d36" : "#282d45",
            }}
            animate={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            transition={{ delay: 3, duration: 2.5, ease: "easeOut" }}
            className={` backdrop-blur-xl rounded-2xl p-5  border border-[#ffffff]/10 w-md mb-5 sm:w-full md:w-xl lg:w-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{
                    color: card.type === "activeThreats" ? "#fe4b49" : "#fff",
                  }}
                  animate={{ color: "#ffffff" }}
                  transition={{ delay: 3, duration: 2.5, ease: "easeOut" }}
                >
                  {card.icon}
                </motion.div>
                <motion.div
                  initial={{
                    color: card.type === "activeThreats" ? "#fe4b49" : "#fff",
                  }}
                  animate={{ color: "#ffffff" }}
                  transition={{ delay: 3, duration: 2.5, ease: "easeOut" }}
                >
                  <h3 className={`font-bold text-2xl`}>{card.title}</h3>
                </motion.div>
              </div>
              <motion.div
                initial={{
                  color: card.type === "activeThreats" ? "#fe4b49" : "#0984e3",
                }}
                animate={{ color: "#42D972" }}
                transition={{ delay: 3, duration: 2.5, ease: "easeOut" }}
              >
                <h5 className={`font-bold text-4xl`}>{card.count}</h5>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{
                  backgroundColor:
                    card.type === "activeThreats" ? "rgba(209, 15, 15, 0.082)" : "#242b44",
                }}
                animate={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                transition={{ delay: 3, duration: 2.5, ease: "easeOut" }}
                className={`flex mt-4 w-full rounded-lg ${styles.cards}`}
              >
                {card.icons.map((icon, index) => {
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-3 ${styles.card} text-black text-[24px]`}
                    >
                      {icon}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default StatCardsSection;
