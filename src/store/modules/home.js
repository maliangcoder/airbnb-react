import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from "../../services";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload) => {
  return await getHomeGoodPriceData()
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
      state.goodPriceInfo = action.payload
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
