
import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconArrowLeft = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"
         style={styleStrToObject("display: block; height: 12px; width: 12px; fill: currentcolor;")}>
      <path d="m10.55.3 1.42 1.4L5.67 8l6.3 6.3-1.42 1.4-6.59-6.58a1.58 1.58 0 0 1-.1-2.13l.1-.11z"></path>
    </svg>
  )
})

export default IconArrowLeft
