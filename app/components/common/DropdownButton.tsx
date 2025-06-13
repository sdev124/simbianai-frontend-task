import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropwDownButton = ({text = ""} : { text: string }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <span>{text}</span>
      <RiArrowDropDownLine size={28} />
    </div>
  );
};

export default DropwDownButton;
