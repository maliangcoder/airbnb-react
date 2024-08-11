import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData,getHomeDiscountData } from "../../services";

export const fetchHomeDataAction = createAsyncThunk("fetchGoodPrice", async (payload) => {
  return await getHomeGoodPriceData()
})
export const fetchHomeDiscountDataAction = createAsyncThunk("fetchDiscount", async (payload) => {
  return await getHomeDiscountData()
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    discountInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
    builder.addCase(fetchHomeDiscountDataAction.fulfilled, (state, action) => {
      state.discountInfo = action.payload
    })

  }
})

export const { changeGoodPriceInfoAction, changeDiscountInfoAction } = homeSlice.actions

export default homeSlice.reducer
