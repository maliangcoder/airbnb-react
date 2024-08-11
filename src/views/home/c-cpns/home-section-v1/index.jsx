import React, { memo } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { infoData, itemWidth } = props
  return (
    <div className='good-price'>
      <SectionHeader title={infoData.title}/>
      <SectionRooms roomList={infoData.list} itemWidth={itemWidth}/>
    </div>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default HomeSectionV1
