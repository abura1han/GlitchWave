import React from "react";

interface Props {
  icon: string;
  displayText: string;
  subText: string;
}

/**
 * Display a box content with icon, A display text, and a sub text
 */
const DisplaySection: React.FC<Props> = ({ icon, displayText, subText }, i) => {
  return (
    <div
      className={`min-w-max min-h-[160px] bg-glitch-box p-5 text-left rounded`}
    >
      <div>
        <img src={icon} alt="Total sales" className="w-14 h-14" />
      </div>
      <div className="text-white font-black text-2xl mt-5">{displayText}</div>
      <div className="text-white text-base">{subText}</div>
    </div>
  );
};

export default DisplaySection;
