import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LeftWrapper } from "./style";
import Icon_logo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  function logoClickHandle() {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <Icon_logo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
