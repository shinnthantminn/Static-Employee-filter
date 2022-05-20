import { configureStore } from '@reduxjs/toolkit'
import DataSlicer from './Slicer/DataSlicer'
import InfoSlicer from './Slicer/InfoSlicer'

const store = configureStore({
  reducer: {
    Data: DataSlicer,
    Info: InfoSlicer,
  },
})

export default store
