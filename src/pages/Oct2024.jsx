import React from "react";
import ShowAll from "../components/ShowAll";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import { useNavigate } from "react-router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CalenderShot from "../components/CalenderShot";
import audio from "/audio/oct.mp3";

const Oct2024 = () => {
  const navigate = useNavigate();
  return (
    <div className='pb-20 text-center bg-no-repeat bg-cover bg-xs-home sm:px-20'>
      <div className='xl:pt-[300px] pt-[48.88px] text-center'>
        <img className='w-[96px] mx-auto' src='mobile/safex_white.png' alt='' />

        <MonthTitle title='October 2023' />
        <p className='text-[12px] uppercase tracking-[1.2px] text-white font-["Helvetica_Neue_Medium"]'>
          to soothe your senses
        </p>
      </div>
      <div className='flex justify-center py-6 space-x-2'>
        <button onClick={() => navigate("/sep")} className='flex-0'>
          <AiOutlineLeft color='#FDFDFD' size={30} className='font-bold' />
        </button>
        <BirdCard
          birdImage={"/mobile/mobile-birds/oct.png"}
          birdName='Indian Blue Robin'
          artist='Recorded by Jelle Seharring'
          song={audio}
        />
        <button onClick={() => navigate("/nov")} className='flex-0'>
          <AiOutlineRight color='#FDFDFD' size={30} />
        </button>
      </div>

      <div className='flex justify-center pb-10 px-[30px] space-x-2'>
        <span></span>
        <CalenderShot dates='dates/oct.png' />
        <span></span>
      </div>
      <ShowAll />
    </div>
  );
};

export default Oct2024;
