import React from "react";
import cn from "classnames";

const CalenderShot = ({ birdImage, monthsImage, size }) => {
  return (
    <div className='w-full bg-[#F7F7F7] h-[325px]'>
      <p className='text-4xl'>CALENDER CARD</p>
      <img src={birdImage} alt='' />
    </div>
  );
};

export default CalenderShot;