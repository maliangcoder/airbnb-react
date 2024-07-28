import React, { memo } from "react";
import { LeftWrapper } from "./style";
import Icon_logo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <Icon_logo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
