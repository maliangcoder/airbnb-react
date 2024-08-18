
import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconArrowLeft = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"
         style={styleStrToObject("display: block; height: 12px; width: 12px; fill: currentcolor")}>
      <path d="M5.41.3 4 1.7 10.3 8 4 14.3l1.41 1.4 6.6-6.58c.57-.58.6-1.5.1-2.13l-.1-.11z"></path>
    </svg>
  )
})

export default IconArrowLeft
