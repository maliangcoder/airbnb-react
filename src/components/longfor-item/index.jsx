import React,{memo} from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className='inner'>
        <img className='cover' src={itemData.picture_url} alt=""/>
        <div className='bg-cover'></div>
        <div className='info'>
          <div className='city'>{itemData.city}</div>
          <div className='price'>均价 {itemData.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  itemData: PropTypes.object
}

// 91 - 1647
export default LongforItem
