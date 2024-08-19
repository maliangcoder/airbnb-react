import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeDiscountData, getHotRecommendData, getHomeLongforData,getHomePlusData } from "@/services";

export const fetchHomeDataAction = createAsyncThunk("fetchGoodPrice", async (payload) => {
  return await getHomeGoodPriceData()
})
export const fetchHomeDiscountDataAction = createAsyncThunk("fetchDiscount", async (payload) => {
  return await getHomeDiscountData()
})
export const fetchHomeHotRecommendDataAction = createAsyncThunk("fetchHotRecommend", async (payload) => {
  return await getHotRecommendData()
})
export const fetchLongforDataAction = createAsyncThunk("fetchLongfor", async (payload) => {
  return await getHomeLongforData()
})
export const fetchHomePlusDataAction = createAsyncThunk("fetchPlus", async (payload) => {
  return await getHomeGoodPriceData()
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
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
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
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
    builder.addCase(fetchLongforDataAction.fulfilled, (state, action) => {
      state.longforInfo = action.payload
    })
    builder.addCase(fetchHomePlusDataAction.fulfilled, (state, action) => {
      state.plusInfo = action.payload
    })
  }
})

export const {
  changeGoodPriceInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
