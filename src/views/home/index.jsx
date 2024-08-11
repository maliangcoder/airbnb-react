import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction, fetchHomeDiscountDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  /** 从redux中获取数据 **/
  const { goodPriceInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)

  /** 派发异步的事件：发送网络请求 **/
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(fetchHomeDiscountDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <HomeSectionV2 infoData={discountInfo}/>
        <HomeSectionV1 infoData={goodPriceInfo} itemWidth='25%'/>
      </div>

    </HomeWrapper>
  )
})

export default Home
