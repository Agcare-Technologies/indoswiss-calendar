import React from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

const LogoSafex = ({ size }) => {
  const navigate = useNavigate();
  const sizeclasses = cn("mx-auto", {
    "w-[110px]": size === "big",
    "w-[91px]": size === "small",
  });
  return (
    <div onClick={() => navigate("/home")}>
      <img
        className={sizeclasses}
        src='/mobile/safex_white.png'
        alt='Safex LOGO'
      />
    </div>
  );
};

export default LogoSafex;

/*
 const css = `@media (max-width: 650px) {
    .safexLogo {
        background-image: url("/mobile/safex_white.png")
    }
}
@media (min-width: 750px) {
    .safexLogo {
        background-image: url("/desktop/safex_white.png");
    }
}`;
  return (
    <div>
      <style scoped>{css}</style>
      <div>
        <img
          className='mx-auto xl:w-[229px] xl:h-[122px]'
          src='/mobile/safex_white.png'
          alt='Safex Logo'
        />
      </div>
    </div>
  );
  */
