import { createSlice } from '@reduxjs/toolkit'
import API from '../../API/data.json'

const Planer = () => {
  const con = API.map((i) => {
    const item = {
      id: i.id,
      company: i.company,
      logo: i.logo,
      new: i.new,
      featured: i.featured,
      position: i.position,
      postedAt: i.postedAt,
      contract: i.contract,
      location: i.location,
      skill: [i.role, i.level, ...i.languages, ...i.tools],
      filter: false,
    }
    return item
  })

  return con
}

const DataReducer = createSlice({
  name: 'Data',
  initialState: Planer(),
})

export default DataReducer.reducer
