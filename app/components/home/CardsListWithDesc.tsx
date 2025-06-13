import React from "react";
import { RxAvatar } from "react-icons/rx";
import { LuFileJson, LuGitCompare } from "react-icons/lu";
import { motion } from "framer-motion";
import { BiCheckCircle } from "react-icons/bi";
import Image from "next/image";
import styles from "./HomePage.module.css";

const cardList = [
  {
    id: 1,
    icon: <RxAvatar className="text-2xl text-green-500" />,
    heading: "Less noise",
    content: "The SOC Agent handled investigation and reporting.",
  },
  {
    id: 2,
    icon: <LuGitCompare className="text-2xl text-green-500" />,
    heading: "Holistic insight",
    content: "90% of alerts resolved automatically, 24/7",
  },
  {
    id: 3,
    icon: <LuFileJson className="text-2xl text-green-500" />,
    heading: "Adapts automatically",
    content:
      "No SOAR needed. investigate every alert, including new ones, with best of Simbian's knowledge and yours.",
  },
];

const CardsListWithDesc = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-6vw", y: 0, opacity: 0 }}
        animate={{ y: "-58vh", opacity: 1 }}
        transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
        className={styles.stateCardsSection}
      >
        <div className="relative mt-20">
          {cardList.map((card, idx) => (
            <div
              key={idx}
              className="flex items-center bg-[#ffffff]/6 backdrop-blur-xs rounded-2xl p-5 gap-5 border border-[#ffffff]/10 w-lg mt-8 sm:w-full md:w-lg"
            >
              <div className="bg-red-300/20 p-2.5 rounded-md ">{card.icon}</div>
              <div>
                <h3 className="font-bold text-xl">{card.heading}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
          className={`${styles.stateCardsSection} flex items-center bg-[#ffffff]/6 backdrop-blur-xs rounded-2xl p-5 gap-5 border border-[#ffffff]/10 w-xl mt-8`}

        initial={{ x: "-6vw", y: 0, opacity: 0 }}
        animate={{ y: "-114vh", opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.5, ease: "easeOut" }}
      >

        <div className="absolute w-[160px] right-[98%] top-[50%] translate-y-[-50%] -ms-3 sm:hidden md:hidden lg:block">
          <Image
            src="/elements/greenArrow.png"
            alt=""
            width="200"
            height="200"
          />
        </div>
        <div className="bg-red-300/20 p-2.5 rounded-md ">
          <BiCheckCircle className="text-2xl text-green-500" />
        </div>
        <div>
          <h3 className="font-bold text-xl">Triaged & Reported</h3>
          <p>The SOC Agent handled investigation and reporting</p>
        </div>
      </motion.div>
    </>
  );
};

export default CardsListWithDesc;
