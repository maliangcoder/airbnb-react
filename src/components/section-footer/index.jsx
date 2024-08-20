import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon_more_arrow";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  // 事件处理逻辑
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#398288' : '#000'}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow/>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}
export default SectionFooter
