import { createSlice } from '@reduxjs/toolkit'

const InfoSlicer = createSlice({
  name: 'info',
  initialState: [],
  reducers: {
    Add: (state, action) => (state = [...state, action.payload]),
    Remove: (state, action) =>
      (state = state.filter((i) => i.id !== action.payload)),
    Reset: (state, action) => (state = []),
  },
})

export const { Add, Remove, Reset } = InfoSlicer.actions
export default InfoSlicer.reducer
