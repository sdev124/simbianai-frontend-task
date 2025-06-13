import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";

const cardList = [
  {
    id: 1,
    icon: <IoCloseCircleOutline className="text-2xl text-red-600" />,
    content: "Wasting valuable analyst time on false positives",
  },
  {
    id: 2,
    icon: <FiMonitor className="text-2xl text-red-600" />,
    content: "Wasting valuable analyst time on false positives",
  },
  {
    id: 3,
    icon: <BiInfoCircle className="text-2xl text-red-600" />,
    content: "Wasting valuable analyst time on false positives",
  },
];

const CardsListSection = () => {
  return (
    <div className="relative mt-20">
      {cardList.map((card, idx) => (
        <div
          key={idx}
          className="flex items-center bg-[rgb(40,45,69)]/20 backdrop-blur-xs rounded-2xl p-5 gap-5 border border-[#2b3653] w-lg mt-8"
        >
          <div className="bg-red-300/20 p-2.5 rounded-md ">{card.icon}</div>
          <div>
            <h3 className="font-bold text-lg">{card.content}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsListSection;
