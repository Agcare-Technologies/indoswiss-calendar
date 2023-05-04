import React from "react";
import { Link } from "react-router-dom";

const ShowAll = () => {
  return (
    <p className='text-white text-[37px] underline underline-offset-8 border-white'>
      <Link to='/home'>SHOW ALL</Link>
    </p>
  );
};

export default ShowAll;
