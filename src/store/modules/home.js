import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeDiscountData, getHotRecommendData } from "@/services";

export const fetchHomeDataAction = createAsyncThunk("fetchGoodPrice", async (payload) => {
  return await getHomeGoodPriceData()
})
export const fetchHomeDiscountDataAction = createAsyncThunk("fetchDiscount", async (payload) => {
  return await getHomeDiscountData()
})
export const fetchHomeHotRecommendDataAction = createAsyncThunk("fetchHotRecommend", async (payload) => {
  return await getHotRecommendData()
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
    builder.addCase(fetchHomeDiscountDataAction.fulfilled, (state, action) => {
      state.discountInfo = action.payload
    })
    builder.addCase(fetchHomeHotRecommendDataAction.fulfilled, (state, action) => {
      state.recommendInfo = action.payload
    })

  }
})

export const {
  changeGoodPriceInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction
} = homeSlice.actions

export default homeSlice.reducer
