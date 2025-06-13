import React from 'react'
import { motion } from "framer-motion";

import { FaCubes } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { BsGrid3X2GapFill } from "react-icons/bs";
import Image from 'next/image';

const CenteredArrowBand = () => {
  return (
    <div className=" h-full flex flex-col gap-40 pt-40 pb-20 items-center sm:pt-0 md:pt-0 sm:pb-0 md:pb-0 lg:pb-208 lg:pt-40">
        <div className="flex flex-col gap-3 sm:flex-row md:flex-row lg:flex-col">
          <div className="bg-white text-black text-2xl p-3 w-[50px] h-[50px]  rounded-lg text-center">
            <BsGrid3X2GapFill />
          </div>
          <div className="bg-white text-black text-2xl p-3 w-[50px] h-[50px]  rounded-lg text-center">
            <GiHummingbird />
          </div>
          <div className="bg-white text-black text-2xl p-3 w-[50px] h-[50px]  rounded-lg text-center">
            <FaCubes />
          </div>
          <div className="bg-white text-black text-2xl p-3 w-[50px] h-[50px]  rounded-lg text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              style={{
                width: "28px",
                height: "28px",
                border: "4px solid #444",
                borderTop: "4px solid #09f",
                borderRadius: "50%",
              }}
            ></motion.div>
          </div>
        </div>

        <div className="opacity-[0.7] sm:hidden md:none lg:block">
          <Image src="/assets/whiteArrow.png" alt="" width="20" height="380" />
        </div>
      </div>
  )
}

export default CenteredArrowBand