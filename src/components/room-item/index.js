import React, { memo } from "react";
import { ItemWrapper } from "./style";
import PropTypes from "prop-types";

const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div>{itemData.name}</div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
