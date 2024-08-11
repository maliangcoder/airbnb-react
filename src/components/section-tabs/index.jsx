import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index,name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={index}
              onClick={e => itemClickHandle(index, item)}
            >{item}</div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
