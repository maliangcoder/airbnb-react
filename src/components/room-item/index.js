import React, { memo } from "react";
import { ItemWrapper } from "./style";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || '#39576a'}
      itemwidth={itemWidth}
    >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt=""/>
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" . ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
          <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly
                  sx={{ fontSize: "12px", color: "#00848a", marginRight: "5px" }}/>
          <span className='cout'>{itemData.reviews_count}</span>
          {
            itemData?.bottom_info && <span className='extra'>-{itemData.bottom_info?.content}</span>
          }

        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem
