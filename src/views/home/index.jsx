import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  fetchHomeDataAction,
  fetchHomeDiscountDataAction,
  fetchHomeHotRecommendDataAction
} from "@/store/modules/home";
import { HomeWrapper } from "./style";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObject } from "../../utils";

const Home = memo(() => {
  /** 从redux中获取数据 **/
  const { goodPriceInfo, discountInfo, recommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo
  }), shallowEqual)

  /** 派发异步的事件：发送网络请求 **/
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(fetchHomeDiscountDataAction())
    dispatch(fetchHomeHotRecommendDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
      </div>

    </HomeWrapper>
  )
})

export default Home
