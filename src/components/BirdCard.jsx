import React from "react";
import cn from "classnames";

const BirdCard = ({ birdImage, birdAudio, monthsImage, size }) => {
  const sizeclasses = cn("bg-gray-100", {
    "2xl:w-[1416px] 2xl:h-[1192px]": size === "big",
    "text-[30px] uppercase": size === "small",
  });
  return (
    <div className={sizeclasses}>
      <p className='text-4xl'>BIRDS CARD</p>
      <img src={birdImage} alt='' />
      <div className='h-20 '></div>
      <div>
        <img src={monthsImage} alt='' />
      </div>
    </div>
  );
};

export default BirdCard;
