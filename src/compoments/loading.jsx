import React from "react";
const Loading = () => {
  return (
    <div className="cs_perloader">
      <div className="cs_perloader_in">
        <svg
          className="cs_cart_animation"
          role="img"
          aria-label="Sattiyas Preloader"
          viewBox="0 0 128 128"
          width="128px"
          height="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="8"
          >
            <g className="cs_cart_track" stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            <g className="cs_cart_lines" stroke="currentColor">
              <polyline
                className="cs_cart_top"
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                stroke-dasharray="338 338"
                stroke-dashoffset="-338"
              />
              <g className="cs_cart_wheel_1" transform="rotate(-90,43,111)">
                <circle
                  className="cs_cart_wheel_stroke"
                  cx="43"
                  cy="111"
                  r="13"
                  stroke-dasharray="81.68 81.68"
                  stroke-dashoffset="81.68"
                />
              </g>
              <g className="cs_cart_wheel_2" transform="rotate(90,102,111)">
                <circle
                  className="cs_cart_wheel_stroke"
                  cx="102"
                  cy="111"
                  r="13"
                  stroke-dasharray="81.68 81.68"
                  stroke-dashoffset="81.68"
                />
              </g>
            </g>
          </g>
        </svg>
        <span className="cs_perloader_text">Welcome to FKM. Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
