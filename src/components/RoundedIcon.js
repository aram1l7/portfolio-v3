import React from "react";

const RoundedIcon = () => {
  return (
    <figure className="stroke-dark absolute left-0 dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-primary  stroke-1 fill-none dark:stroke-primaryDark"
        ></circle>
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="fill-light stroke-[5px] dark:fill-dark"
          stroke-dashoffset="0px"
          stroke-dasharray="1px 1px"
        ></circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="stroke-1 fill-primary dark:fill-primaryDark"
        ></circle>
      </svg>
    </figure>
  );
};

export default RoundedIcon;
