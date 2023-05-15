import React from "react";
import ShowAll from "../components/ShowAll";
import LogoSafex from "../components/LogoSafex";
import SootheSensesPara from "../components/SootheSensesPara";
import MonthTitle from "../components/MonthTitle";
import BirdCard from "../components/BirdCard";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate } from "react-router";
import CalenderShot from "../components/CalenderShot";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BackgroundImage } from "react-image-and-background-image-fade";

const Nov2023 = () => {
  const navigate = useNavigate();
  return (
    <BackgroundImage
      src='/mobile/background.png'
      lazyLoad
      className='pb-20 text-center bg-no-repeat bg-cover sm:px-20'
    >
      <div className='xl:pt-[300px] pt-[48.88px] text-center'>
        <img className='w-[96px] mx-auto' src='mobile/safex_white.png' alt='' />

        <MonthTitle title='November 2023' />
        <p className='text-[12px] uppercase tracking-[1.2px] text-white font-["Helvetica_Neue_Medium"]'>
          to soothe your senses
        </p>
      </div>
      <div className='flex justify-center pt-6 space-x-2'>
        <button onClick={() => navigate("/home")} className='flex-0'>
          <AiOutlineLeft color='#FDFDFD' size={30} className='font-bold' />
        </button>
        <BirdCard
          birdImage={"/mobile/mobile-birds/nov-2023.png"}
          birdName='Indian Paradise Fly Catcher'
        />
        <button onClick={() => navigate("/dec2023")} className='flex-0'>
          <AiOutlineRight color='#FDFDFD' size={30} />
        </button>
      </div>

      <div className='flex justify-center pb-20 px-[30px] space-x-2'>
        <span></span>
        <CalenderShot dates='dates/nov-2023.png' />
        <span></span>
      </div>
      <ShowAll />
    </BackgroundImage>
  );
};

export default Nov2023;

/*
<div className='flex justify-center space-x-2 items-center sm:px-[50px] md:px-[100px]'>
        <div className=''>
          <BirdCard size='big' />
          
        </div>
      </div>
      */

/*
      <div className='h-screen px-2 bg-cyan-200'>
      <div className='flex flex-col xl:pt-[300px] items-center pt-20 space-y-12 text-center space-between'>
        <LogoSafex />
        <div className='flex justify-end'>
          <button onClick={() => navigate("/home")} className='flex-0'>
            LA
          </button>
          <div>
            <MonthTitle title='November 2023' />
            <SootheSensesPara size='small' />
          </div>
          <button onClick={() => navigate("/dec2023")} className='flex-0'>
            RA
          </button>
        </div>
      </div>
    </div>
    */

/*
    <div className='flex items-center justify-between text-center'>
          <button onClick={() => navigate("/home")} className='flex-0'>
            LA
          </button>
          <MonthTitle title='November 2023' />
          <button onClick={() => navigate("/dec2023")} className='flex-0'>
            RA
          </button>
        </div>
        */
