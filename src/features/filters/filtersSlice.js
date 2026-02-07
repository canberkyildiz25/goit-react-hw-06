import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload
    },
    clearFilters(state) {
      state.name = ''
    },
  },
})

export const { setNameFilter, clearFilters } = filtersSlice.actions
export default filtersSlice.reducer
