import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  fetchHomeDataAction,
  fetchHomeDiscountDataAction,
  fetchHomeHotRecommendDataAction, fetchHomePlusDataAction, fetchLongforDataAction
} from "@/store/modules/home";
import { HomeWrapper } from "./style";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { isEmptyObject } from "../../utils";
import HomeLongfor from "./c-cpns/home-longfor";

const Home = memo(() => {
  /** 从redux中获取数据 **/
  const { goodPriceInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual)

  /** 派发异步的事件：发送网络请求 **/
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch( fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>

    </HomeWrapper>
  );
})

export default Home
