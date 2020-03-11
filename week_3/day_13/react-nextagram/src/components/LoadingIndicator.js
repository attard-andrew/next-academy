import React from 'react'

const LoadingIndicator = ({width = 200, height= 200, color = "#FF5733"}) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    margin: "auto",
    background: "transparent",
    display: "block",
    shapeRendering: "auto"
  }}
  width={`${width}px`}
  height={`${height}px`}
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <circle
    cx="50"
    cy="50"
    r="32"
    strokeWidth="8"
    stroke={color}
    strokeDasharray="50.26548245743669 50.26548245743669"
    fill="none"
    strokeLinecap="round"
    transform="rotate(182.103 50 50)"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      repeatCount="indefinite"
      dur="1s"
      keyTimes="0;1"
      values="0 50 50;360 50 50"
    ></animateTransform>
  </circle>
</svg>
)


export default LoadingIndicator