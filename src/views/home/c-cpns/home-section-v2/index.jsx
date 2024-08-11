import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const HomeSectionV2 = memo((props) => {

  const {infoData} = props

  /** 数据的转换 **/
  const initialName = infoData.dest_address?.[0].name
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle } />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth='33.33333%' />
    </SectionV2Wrapper>
  )
})


HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
