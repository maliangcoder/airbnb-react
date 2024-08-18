import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon_more_arrow";
import PropTypes from "prop-types";

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  return (
    <FooterWrapper color={name ? '#398288' : '#000'}>
      <div className='info'>
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
